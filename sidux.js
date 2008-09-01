// Set default homepage
//
pref("browser.startup.homepage", "http://sidux.com/");

// Override default layout.css.dpi value
//
// -1
// Use the host system’s logical resolution or 96, whichever is greater,
// for interpreting dimensions specified in absolute units. (Default)
//
// 0
// Use the host system’s logical resolution for interpreting dimensions
// specified in absolute units.
//
// >= 1 (eg. 96, 120)
// Use this number for interpreting dimensions specified in absolute units.
//
pref("layout.css.dpi", 0);

// Set sane and readable default font selections
//
pref("font.name.sans-serif.x-western", "Bitstream Vera Sans");
pref("font.name.serif.x-western", "Bitstream Vera Serif");
pref("font.minimum-size.x-western", 12);
pref("font.size.variable.x-western", 14);

// Some minor appearance tweaks
//
pref("browser.tabs.closeButtons", 3);
pref("browser.tabs.tabMinWidth", 5);
pref("browser.visited_color", "#336666");
