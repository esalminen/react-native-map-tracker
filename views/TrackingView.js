import { StyleSheet, ToastAndroid, Vibration, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

// From inside of my project folder.
import Map from '../components/Map';
import LocationAccuracy from '../components/LocationAccuracy';
import Controls from '../components/Controls';
import { STORAGE_KEY, NOTIFY_VIBRATE } from '../utils/Constants';

export default function TrackingView() {
  const [ errorMsg, setErrorMsg ] = useState( null ); // TODO: not implemented
  const [ location, setLocation ] = useState( null );
  const [ markers, setMarkers ] = useState( [] );

  /**
   * Use-effect hook searches only initial location. Continuous location tracking must be enabled separately from UI.
   */
  useEffect( () => {
    ( async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if ( status !== 'granted' ) {
        setErrorMsg( 'Permission to access location was denied' );
        return;
      }
      const location = await Location.getCurrentPositionAsync( { accuracy: Location.Accuracy.BestForNavigation } );
      setLocation( location );
      getDataFromStorage();
    } )();
  }, [] );

  /**
   * Get marker data from phone data storage.
   */
  async function getDataFromStorage() {
    try {
      const storageItem = await AsyncStorage.getItem( STORAGE_KEY );
      let parsedJSON = await JSON.parse( storageItem );
      if ( parsedJSON === null ) {
        parsedJSON = [];
      }
      setMarkers( parsedJSON );
    } catch ( e ) {
      console.log( e );
    }
  }

  /**
   * Save marker data to phone data storage.
   * @param {markers} data 
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
   * Refresh location by users request.
   */
  async function onUpdateLocationHandler() {
    showNotification( 'Updating Location' );
    setLocation( null );
    const location = await Location.getCurrentPositionAsync( { accuracy: Location.Accuracy.BestForNavigation } );
    setLocation( location );
  }

  /**
   * Add current location as a marker to markers list.
   * @param {Integer} iconNumber 
   * @param {String} description 
   */
  function onAddMarkerHandler( iconNumber, description ) {
    const markerData = {
      id: markers.length,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      title: `marker_${ markers.length }`,
      description: description,
      iconIndex: iconNumber,
      timeStamp: location.timestamp
    };
    const newMarkersList = [ ...markers, markerData ];
    setMarkers( newMarkersList );
    saveDataToStorage( newMarkersList );
    showNotification( 'New Marker Added to List' );
  }

  /**
   * Shows short toast notification with short vibration.
   * @param {String} msg 
   */
  function showNotification( msg ) {
    ToastAndroid.show(
      msg,
      ToastAndroid.SHORT
    );
    Vibration.vibrate( NOTIFY_VIBRATE );
  }

  return (
    <KeyboardAvoidingView style={ styles.container }>
      <ScrollView>
        <LocationAccuracy accuracy={ location?.coords.accuracy } />
        <Map latitude={ location?.coords.latitude } longitude={ location?.coords.longitude } markers={ markers } />
        <Controls onUpdateLocation={ onUpdateLocationHandler }
          onAddMarker={ onAddMarkerHandler }
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight * 1.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
} );
