import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, Image } from 'react-native';

const MARKER_ICONS = [require('../assets/bird.png'), require('../assets/mushroom.png'), require('../assets/berries.png'), require('../assets/thin-target.png')];

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
        zoomControlEnabled={ true }
        zoomEnabled={ true }
        showsMyLocationButton={ true }
        showsUserLocation={ true }
        initialRegion={ {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        } }
      >
        { markers.map( ( marker ) => (
          <Marker
            key={ marker.id }
            coordinate={ { latitude: marker.latitude, longitude: marker.longitude } }
            title={ marker.title }
            anchor={ { x: 0.5, y: 0.5 } }
          >
            <Image
            source={ MARKER_ICONS[marker.iconIndex] }
            style={ styles.mapIcon }
          />
          </Marker>
        ) ) }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get( 'window' ).width,
    height: Dimensions.get( 'window' ).height / 2,
  },
  map: {
    width: Dimensions.get( 'window' ).width,
    height: Dimensions.get( 'window' ).height / 2,
  },
  mapIcon: {
    height: 32,
    width: 32,
  },
  retrievingText: {
    marginBottom: 10,
  }
} );