import * as Location from 'expo-location';
import { useEffect, useContext } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';

// From inside of my project folder.
import Controls from '../components/Controls';
import { saveDataToStorage, showNotification, AppContext } from '../utils/HelperFunctions';
import LocationAccuracy from '../components/LocationAccuracy';
import Map from '../components/Map';

/**
 * Application Map Tracking View.
 */
export default function TrackingView( { route } ) {
  const { location, setLocation, markers, setMarkers } = useContext( AppContext );

  useEffect( () => {
    // If there is a marker object in the params then we want to re-locate the map to the selected marker position.
    if ( route.params?.marker ) {
      const marker = route.params.marker;
      let newLocation = { ...location };
      newLocation.coords.latitude = marker.latitude;
      newLocation.coords.longitude = marker.longitude;
      setLocation( newLocation );
    }
  }, [] );

  /**
   * Refresh location by users request.
   */
  async function onUpdateLocationHandler() {
    showNotification( 'Updating Location' );
    setLocation(null);
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
      key: Date.now(),
      id: markers.length,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      accuracy: location.coords.accuracy.toFixed( 2 ),
      title: `Marker #${ markers.length }`,
      description: description,
      icon: icon,
      timeStamp: new Date( location.timestamp ).toLocaleString(),
    };
    const newMarkersList = [ ...markers, markerData ];
    setMarkers( newMarkersList );
    saveDataToStorage( newMarkersList );
    showNotification( 'New Marker Added to List' );
  }

  /**
   * Sets marker location for current location when drag ends.
   * @param {event} event 
   */
  function onMarkerDragEnd( event ) {
    const newCoords = event.nativeEvent.coordinate;
    let newLocation = { ...location };
    newLocation.coords.latitude = newCoords.latitude;
    newLocation.coords.longitude = newCoords.longitude;
    setLocation( newLocation );
  }

  return (
    <KeyboardAvoidingView style={ styles.container }>
      <ScrollView>
        <LocationAccuracy accuracy={ location?.coords.accuracy } />
        <Map latitude={ location?.coords.latitude }
          longitude={ location?.coords.longitude }
          markers={ markers }
          onDragEnd={ onMarkerDragEnd }
        />
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
