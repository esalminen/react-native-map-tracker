import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, Image } from 'react-native';
import { MARKER_ICONS, LATITUDE_DELTA, LONGITUDE_DELTA } from '../utils/Constants';

export default function Map( { latitude, longitude, markers, mapRef } ) {

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
        ref={mapRef}
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
            description={marker.description}
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