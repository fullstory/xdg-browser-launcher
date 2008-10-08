// Set default homepage
// This must be done via very strange method: http://bugs.debian.org/425961
//
pref("browser.startup.homepage", "file:///usr/share/sidux-browser/sidux-browser.properties");

// Override default layout.css.dpi value
//
// -1
// Use the host system's logical resolution or 96, whichever is greater,
// for interpreting dimensions specified in absolute units. (Default)
//
// 0
// Use the host system's logical resolution for interpreting dimensions
// specified in absolute units.
//
// >= 1 (eg. 96, 120)
// Use this number for interpreting dimensions specified in absolute units.
//
pref("layout.css.dpi", 0);

// Set sane font sizes
//
pref("font.minimum-size.x-western",    11);
pref("font.size.variable.x-western",   12);

// Override browser.tabs.closeButtons
//
// 0
// Display a close button on the active tab only
//
// 1
// Display close buttons on all tabs (Default)
//
// 2
// Don’t display any close buttons
//
// 3
// Display a single close button at the end of the tab strip (Firefox 1.x behavior)
//
pref("browser.tabs.closeButtons", 3);
pref("browser.tabs.tabMinWidth",  5);

// Something other than purple for visited links
pref("browser.visited_color",     "#336666");

// set useragent locale string - temporal workaround for #495381
pref("general.useragent.locale", "chrome://global/locale/intl.properties");
