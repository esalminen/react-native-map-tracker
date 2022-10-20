import { createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid, Vibration } from 'react-native';
import { STORAGE_KEY, NOTIFY_VIBRATE, SHORT_VIBRATE, LONG_VIBRATE } from './Constants';

/**
 * Get data from the phone data storage.
 */
async function getDataFromStorage() {
  try {
    const storageItem = await AsyncStorage.getItem( STORAGE_KEY );
    let parsedJSON = await JSON.parse( storageItem );
    if ( parsedJSON === null ) {
      parsedJSON = [];
    }
    return parsedJSON;
  } catch ( e ) {
    console.log( e );
  }
}

/**
 * Save data to the phone data storage.
 * @param {[markerObject]} data 
 */
async function saveDataToStorage( data ) {
  try {
    const jsonValue = JSON.stringify( data );
    await AsyncStorage.setItem( STORAGE_KEY, jsonValue );
  } catch ( e ) {
    console.log( e );
  }
}

/**
* Shows a short toast notification with a short vibration.
* @param {String} msg 
*/
function showNotification( msg ) {
  ToastAndroid.show(
    msg,
    ToastAndroid.SHORT
  );
  Vibration.vibrate( NOTIFY_VIBRATE );
}

/**
 * Short vibrate (100 ms).
 */
function vibrateShort() {
  Vibration.vibrate( SHORT_VIBRATE );
}

/**
 * Long vibrate (500 ms).
 */
function vibrateLong() {
  Vibration.vibrate( LONG_VIBRATE );
}

// Use context to deliver state reference to views.
const AppContext = createContext( null );

export {
  getDataFromStorage,
  saveDataToStorage,
  showNotification,
  vibrateShort,
  vibrateLong,
  AppContext
};