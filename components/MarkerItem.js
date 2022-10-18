import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { MARKER_ICONS } from '../utils/Constants';

export default function MarkerItem( { marker, onMarkerPress } ) {


  return (
    <Pressable onPress={()=>onMarkerPress(marker)}>
      <View style={ styles.container }>
        <View style={ styles.imageContainer }>
          <Image
            style={ styles.image }
            source={ MARKER_ICONS[ marker.iconIndex ] }></Image>
        </View>
        <View style={ styles.descriptionContainer }>
          <Text style={ styles.title }>{ marker.title }</Text>
          <Text style={ styles.time }>{ marker.timeStamp }</Text>
          <Text style={ styles.description }>{ marker.description }</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create( {
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#8d97a3',
    marginBottom: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 64,
    height: 64,
  },
  descriptionContainer: {

  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  time: {
    marginBottom: 5,
  },
  description: {

  },
} );