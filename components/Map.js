import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';

export default function Map( { latitude, longitude, markers } ) {
  // Delta values show approx. 100m x 100m area
  const LATITUDE_DELTA = 0.009;
  const LONGITUDE_DELTA = 0.018;

  if ( !latitude || !longitude ) {
    return (
      <View style={ styles.container }>
        <Text style={ styles.retrievingText }>Retrieving Location...</Text>
        <ActivityIndicator size={ 'large' } />
      </View>
    );
  }

  return (
    <View>
      <MapView
        style={ styles.map }
        initialRegion={ {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        } }
      >
        <Marker
          coordinate={ { latitude: latitude, longitude: longitude } }
          title={'User'}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    position: 'absolute',
    width: Dimensions.get( 'window' ).width,
    height: Dimensions.get( 'window' ).height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get( 'window' ).width,
    height: Dimensions.get( 'window' ).height / 2,
  },
  retrievingText: {
    marginBottom: 10,
  }
} );