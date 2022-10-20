import * as Location from 'expo-location';
import { StyleSheet, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { useEffect, useState, useRef } from 'react';

// From inside of my project folder.
import Controls from '../components/Controls';
import LocationAccuracy from '../components/LocationAccuracy';
import Map from '../components/Map';
import { LATITUDE_DELTA, LONGITUDE_DELTA } from '../utils/Constants';
import { getDataFromStorage, saveDataToStorage, showNotification } from '../utils/HelperFunctions';


/**
 * Application Map Tracking View
 */
export default function TrackingView({route}) {
  const [ location, setLocation ] = useState( null );
  const [ markers, setMarkers ] = useState( [] );

  // Use for moving map to marker
  const mapRef = useRef(null);

  //Use-effect hook searches initial location and gets marker data from async storage.
  useEffect( () => {
    ( async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if ( status !== 'granted' ) {
        Alert.alert(
          'Permission to access location was denied',
          'Please give the required permission from the device settings',
          [
            {
              text: 'Ok',
              style: 'default',
            },
          ]
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync( { accuracy: Location.Accuracy.BestForNavigation } );
      setLocation( location );
      const data = await getDataFromStorage();

      // If there is marker object in params then we want to move map to marker location.
      if (route.params?.marker && mapRef) {
        const marker = route.params.marker;
        const moveToRegion = {
            latitude: marker.latitude,
            longitude: marker.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        };
        mapRef.current.animateToRegion(moveToRegion);
      }
      setMarkers(data);
    } )();
  }, [] );  

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
      accuracy: location.coords.accuracy,
      title: `Marker #${ markers.length }`,
      description: description,
      icon: iconNumber,
      timeStamp: new Date(location.timestamp).toLocaleString(),
    };
    const newMarkersList = [ ...markers, markerData ];
    setMarkers( newMarkersList );
    saveDataToStorage( newMarkersList );
    showNotification( 'New Marker Added to List' );
  }

  return (
    <KeyboardAvoidingView style={ styles.container }>
      <ScrollView>
        <LocationAccuracy accuracy={ location?.coords.accuracy } />
        <Map latitude={ location?.coords.latitude } longitude={ location?.coords.longitude } markers={ markers } mapRef={mapRef}/>
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
  },
} );
