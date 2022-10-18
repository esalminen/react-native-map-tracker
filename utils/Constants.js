// Storage key for data saving/retrieving.
const STORAGE_KEY = '@map_tracker_data';

// Vibration patterns. Time unit is ms. Odd cells are pause and even cells are vibration duration.
const NOTIFY_VIBRATE = [ 0, 200 ]; // 0 ms pause, 200 ms vibration
const SHORT_VIBRATE = [ 0, 100 ]; // 0 ms pause, 100 ms vibration
const LONG_VIBRATE = [ 0, 500 ]; // 0 ms pause, 500 ms vibration

// Map marker icons
const MARKER_ICONS = [require('../assets/bird.png'), require('../assets/mushroom.png'), require('../assets/berries.png'), require('../assets/thin-target.png')];

// Help documentation for buttons and icons
const HELP_ITEMS = [
  {
    icon: require('../assets/search.png'),
    title: 'Start Tracking Things',
    description: 'Opens main tracking page and updates location of the user to the map.'
  }
];

export {
  STORAGE_KEY,
  NOTIFY_VIBRATE,
  SHORT_VIBRATE,
  LONG_VIBRATE,
  MARKER_ICONS,
  HELP_ITEMS
};