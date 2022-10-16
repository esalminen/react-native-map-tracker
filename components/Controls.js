import { View, Text, Button, StyleSheet, Pressable, Image, TextInput, Switch } from 'react-native';
import React, { useState } from 'react';


/**
 * Helper functions to make grid
 */
const Col = ( { numRows, children } ) => {
  return (
    <View style={ styles[ `${ numRows }col` ] }>{ children }</View>
  );
};

const Row = ( { children } ) => (
  <View style={ styles.row }>{ children }</View>
);
/*****/

export default function Controls( { onUpdateLocation, onAddMarker } ) {
  const [ iconSelected, setIconSelected ] = useState( 1 );

  /**
   * Handlers to call passed props function.
   */
  function updateLocationHandler() {
    onUpdateLocation();
  }

  function addMarkerHandler() {
    onAddMarker( iconSelected );
  }
  /*****/

  return (
    <View style={ styles.container }>
      <Row>
        <Col numRows={ 1 }>
          <Button title={ 'Update Location' } onPress={ updateLocationHandler } />
        </Col>
        <Col numRows={ 1 }>
          <Button title={ 'Add Marker' } onPress={ addMarkerHandler } />
        </Col>
      </Row>
      <Row>
        <Col numRows={ 1 }>
          <Pressable style={ [ styles.thumbnailContainer, iconSelected === 0 ? styles.selected : null ] }
            onPress={ () => setIconSelected( 0 ) }
          >
            <Image
              source={ require( '../assets/bird.png' ) }
              style={ styles.thumbnail }
            />
          </Pressable>
        </Col>
        <Col numRows={ 1 }>
          <Pressable style={ [ styles.thumbnailContainer, iconSelected === 1 ? styles.selected : null ] }
            onPress={ () => setIconSelected( 1 ) }
          >
            <Image
              source={ require( '../assets/mushroom.png' ) }
              style={ styles.thumbnail }
            />
          </Pressable>
        </Col>
        <Col numRows={ 1 }>
          <Pressable style={ [ styles.thumbnailContainer, iconSelected === 2 ? styles.selected : null ] }
            onPress={ () => setIconSelected( 2 ) }
          >
            <Image
              source={ require( '../assets/berries.png' ) }
              style={ styles.thumbnail }
            />
          </Pressable>
        </Col>
        <Col numRows={ 1 }>
          <Pressable style={ [ styles.thumbnailContainer, iconSelected === 3 ? styles.selected : null ] }
            onPress={ () => setIconSelected( 3 ) }
          >
            <Image
              source={ require( '../assets/thin-target.png' ) }
              style={ styles.thumbnail }
            />
          </Pressable>
        </Col>
      </Row>
      <Row>
        <Col numRows={ 1 }>
          <Text>Comment:</Text>
        </Col>
        <Col numRows={ 1 }>
          <TextInput placeholder='insert comment here...' />
        </Col>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 4,
    marginHorizontal: 'auto',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  rowContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  "1col": {
    borderColor: "#fff",
    borderWidth: 1,
    flex: 1,
    padding: 5,
  },
  "2col": {
    borderColor: "#fff",
    borderWidth: 1,
    flex: 2
  },
  "3col": {
    borderColor: "#fff",
    borderWidth: 1,
    flex: 3
  },
  "4col": {
    flex: 4
  },
  thumbnail: {
    height: 64,
    width: 64
  },
  thumbnailContainer: {
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    borderWidth: 2,
    borderColor: '#06bcee',
  }
} );
