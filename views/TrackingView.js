import * as Location from 'expo-location';
import { useEffect, useRef, useContext } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';

// From inside of my project folder.
import { AppContext } from '../App';
import Controls from '../components/Controls';
import LocationAccuracy from '../components/LocationAccuracy';
import Map from '../components/Map';
import { LATITUDE_DELTA, LONGITUDE_DELTA } from '../utils/Constants';
import { saveDataToStorage, showNotification } from '../utils/HelperFunctions';

/**
 * Application Map Tracking View.
 */
export default function TrackingView({route}) {
  const { location, setLocation, markers, setMarkers } = useContext(AppContext);

  // Used for controlling the map from trackingview.
  const mapRef = useRef(null);

  useEffect( () => {

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
   * @param {String} icon
   * @param {String} description 
   */
  function onAddMarkerHandler( icon, description ) {
    const markerData = {
      id: markers.length,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      accuracy: location.coords.accuracy.toFixed(2),
      title: `Marker #${ markers.length }`,
      description: description,
      icon: icon,
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
