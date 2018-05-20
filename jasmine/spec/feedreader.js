/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    describe('RSS Feeds', function() {
        /* This function tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* This function is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URLs defined and are not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has names defined and are not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    describe('The Menu', function() {
        /* This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        /* This test ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('is visible when icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });
        it('is hidden when icon is clicked again', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
            done();
            });
        });

        it('has finished running and has at least one entry', function(done) {
            var feedEntry = $('.entry').length;
            expect(feedEntry).toBeGreaterThan(0);
            done();
        });
    });




    describe('New Feed Selection', function() {
        /* This test ensures that when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * The loadFeed() function is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                beforeLoad = $('.feed').html();

                loadFeed(1, function() {
                    afterLoad = $('.feed').html();
                    done();
                });
            });
        });

        it('is updated with new content', function(done) {
            expect(beforeLoad).not.toEqual(afterLoad);
            done();
        });
    });
})();
