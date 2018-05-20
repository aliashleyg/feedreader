# Feedreader Project

This jasmine.js feedreader file tests the following elements to ensure code is working as intended.

## How to Use this File
1. Clone or download this entire project.
2. Open the index.html file in your favorite browser.
3. To navigate the site, use the menu icon to toggle open/close the menu.

## Jasmine Tests Being Performed.

### Test Suite #1, RSS Feeds:
1. confirms that the allFeeds variable has been defined and,
2. that the URL's in the allFeeds variable are all defined and,
3. that the names in the allFeeds variable are all defined.

### Test Suite #2, The Menu:
1. confirms that the menu is hidden by default and,
2. confirms that the menu changes visibility when the menu icon is clicked.

### Test Suite #3, Initial Entries:
1. confirms that the asynchronous function `loadFeed` has finished running and,
2. confirms that there is at least one entry in the feed.

### Test Suite #4, New Feed Selection:
1. confirms that content actually changes when a new feed is loaded.

This project was completed for the Udacity Front End Development Nanodegree.
