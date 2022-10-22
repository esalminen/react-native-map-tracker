// Storage key for data saving/retrieving.
const STORAGE_KEY = '@map_tracker_data';

// Vibration patterns. Time unit is ms. Odd cells are pause and even cells are vibration duration.
const NOTIFY_VIBRATE = [ 0, 200 ]; // 0 ms pause, 200 ms vibration
const SHORT_VIBRATE = [ 0, 100 ]; // 0 ms pause, 100 ms vibration
const LONG_VIBRATE = [ 0, 500 ]; // 0 ms pause, 500 ms vibration

// Icon key-values
const ICONS = {
  'bird': require( '../assets/icons/bird.png' ),
  'mushroom': require( '../assets/icons/mushroom.png' ),
  'berries': require( '../assets/icons/berries.png' ),
  'target': require( '../assets/icons/thin-target.png' ),
  'logo': require( '../assets/icons/maptrackerlogo.png' ),
  'tracking': require( '../assets/icons/map.png' ),
  'markers': require( '../assets/icons/file.png' ),
  'help': require( '../assets/icons/information.png' ),
  'delete': require( '../assets/icons/delete.png' ),
  'clipboard': require( '../assets/icons/clipboard.png' ),
};

// Help screens for documentation
const HELP_SCREENS = {
  'main_help': require( '../assets/help_screens/main_help.png' ),
  'markerlist_help': require( '../assets/help_screens/markerlist_help.png' ),
  'tracking_help': require( '../assets/help_screens/tracking_help.png' ),
};

// Delta values show approx. 1km x 1km area
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.018;

export {
  STORAGE_KEY,
  NOTIFY_VIBRATE,
  SHORT_VIBRATE,
  LONG_VIBRATE,
  ICONS,
  HELP_SCREENS,
  LATITUDE_DELTA,
  LONGITUDE_DELTA
};