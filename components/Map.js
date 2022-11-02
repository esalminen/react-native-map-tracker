import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, Image } from 'react-native';
import { ICONS, LATITUDE_DELTA, LONGITUDE_DELTA } from '../utils/Constants';

/**
 * Map component of the Tracking View.
 */
export default function Map( { latitude, longitude, markers, onDragEnd } ) {

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
        <Marker
          coordinate={ {
            latitude: latitude,
            longitude: longitude
          } }
          draggable={true}
          onDragEnd={onDragEnd}
          title={ 'Marker Edit Point' }
        />
        { markers.map( ( marker ) => (
          <Marker
            key={ marker.key }
            coordinate={ { latitude: marker.latitude, longitude: marker.longitude } }
            title={ marker.title }
            description={ marker.description }
            anchor={ { x: 0.5, y: 0.5 } }
          >
            <Image
              source={ ICONS[ marker.icon ] }
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