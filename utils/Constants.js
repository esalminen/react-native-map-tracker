// Storage key for data saving/retrieving.
const STORAGE_KEY = '@map_tracker_data';

// Vibration patterns. Time unit is ms. Odd cells are pause and even cells are vibration duration.
const NOTIFY_VIBRATE = [ 0, 200 ]; // 0 ms pause, 200 ms vibration
const SHORT_VIBRATE = [ 0, 100 ]; // 0 ms pause, 100 ms vibration
const LONG_VIBRATE = [ 0, 500 ]; // 0 ms pause, 500 ms vibration

// Icon key-values
const ICONS = {
  'bird': require( '../assets/bird.png' ),
  'mushroom': require( '../assets/mushroom.png' ),
  'berries': require( '../assets/berries.png' ),
  'target': require( '../assets/thin-target.png' ),
  'logo': require( '../assets/maptrackerlogo.png' ),
  'tracking': require( '../assets/map.png' ),
  'markers': require( '../assets/file.png' ),
  'help': require( '../assets/information.png' ),
};

// Help documentation for buttons and icons
const HELP_ITEMS = [
  {
    icon: ICONS[ 'tracking' ],
    title: 'Start Tracking Things',
    description: 'Opens main tracking page and updates location of the user to the map.'
  }
];

// Delta values show approx. 1km x 1km area
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.018;

export {
  STORAGE_KEY,
  NOTIFY_VIBRATE,
  SHORT_VIBRATE,
  LONG_VIBRATE,
  ICONS,
  HELP_ITEMS,
  LATITUDE_DELTA,
  LONGITUDE_DELTA
};