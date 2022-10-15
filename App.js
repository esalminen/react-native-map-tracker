import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import LocationAccuracy from './components/LocationAccuracy';
import Constants from 'expo-constants';
import Map from './components/Map';
import { useEffect, useState } from 'react';

export default function App() {
  const [ isLoaded, setIsLoaded ] = useState( false );
  const [ errorMsg, setErrorMsg ] = useState( null );
  const [ location, setLocation ] = useState( null );

  useEffect( () => {
    ( async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if ( status !== 'granted' ) {
        setErrorMsg( 'Permission to access location was denied' );
        return;
      }

      const location = await Location.getCurrentPositionAsync( { accuracy: Location.Accuracy.BestForNavigation } );
      console.log(location);
      setLocation(location);
    } )();
  }, [] );


  return (
    <View style={ styles.container }>
      <LocationAccuracy accuracy={ location?.coords.accuracy } />
      <Map latitude={ location?.coords.latitude } longitude={ location?.coords.longitude } />
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
