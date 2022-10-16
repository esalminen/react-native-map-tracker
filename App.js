import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

// From components folder.
import Map from './components/Map';
import LocationAccuracy from './components/LocationAccuracy';
import Controls from './components/Controls';

// Storage key for data saving/retrieving.
const STORAGE_KEY = '@map_tracker_data';

export default function App() {
  const [ isTracking, setIsTracking ] = useState( false ); // TODO: not implemented
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
    setLocation( null );
    const location = await Location.getCurrentPositionAsync( { accuracy: Location.Accuracy.BestForNavigation } );
    setLocation( location );
  }

  /**
   * Add current location as a marker to markers list.
   * @param {Integer} iconNumber 
   */
  function onAddMarkerHandler( iconNumber ) {
    const markerData = {
      id: markers.length,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      title: `marker_${ markers.length }`,
      iconIndex: iconNumber,
      timeStamp: location.timestamp
    };
    const newMarkersList = [ ...markers, markerData ];
    setMarkers( newMarkersList );
    saveDataToStorage( newMarkersList );
  }

  return (
    <View style={ styles.container }>
      <LocationAccuracy accuracy={ location?.coords.accuracy } />
      <Map latitude={ location?.coords.latitude } longitude={ location?.coords.longitude } markers={ markers } />
      <Controls onUpdateLocation={ onUpdateLocationHandler } onAddMarker={ onAddMarkerHandler } />
    </View>
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
