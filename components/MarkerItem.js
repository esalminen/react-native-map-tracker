import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { ICONS } from '../utils/Constants';

export default function MarkerItem( { marker, onMarkerPress, onMarkerDeletePress } ) {

  return (
    <View style={ styles.container }>
      <Pressable onPress={ () => onMarkerPress( marker ) }>
        <View style={ styles.imageContainer }>
          <Image
            style={ styles.image }
            source={ ICONS[ marker.icon ] }></Image>
        </View>
      </Pressable>
      <View style={ styles.descriptionContainer }>
        <Text style={ styles.title }>{ marker.title }</Text>
        <Text style={ styles.time }>{ marker.timeStamp }</Text>
        <Text style={ styles.description }>Latitude: { marker.latitude }</Text>
        <Text style={ styles.description }>Longitude: { marker.longitude }</Text>
        <Text style={ styles.description }>Accuracy: { marker.accuracy } +/- m</Text>
        <Text style={ styles.description }>{ marker.description }</Text>
      </View>
      <Pressable onPress={ () => onMarkerDeletePress( marker )}>
      <View style={styles.deleteIconContainer}>
        <Image
          style={styles.deleteIcon}
          source={ ICONS[ 'delete']}
          />
      </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#8d97a3',
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: '#eee',
    padding: 3,
    borderRadius: 10,
    marginRight: 10,
  },
  image: {
    width: 48,
    height: 48,
  },
  descriptionContainer: {
    width: '70%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  time: {
    marginBottom: 5,
  },
  description: {
  },
  deleteIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIcon: {
    width: 32,
    height: 32,
  },
} );