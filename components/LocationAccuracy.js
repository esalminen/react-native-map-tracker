import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function LocationAccuracy( { accuracy } ) {
  const accuracyString = !accuracy ? '__' : accuracy.toFixed( 1 );
  return (
    <View style={ [
      styles.container,
      !accuracy ? styles.undefinedBackground :
        accuracy > 20 ? styles.badBackground :
          accuracy > 10 ? styles.poorBackground :
            styles.goodBackground
    ] }>
      <Text style={ styles.accText }>{ `GPS Accuracy: +/- ${ accuracyString } m` }</Text>
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    width: '100%',
    padding: 10,
  },
  undefinedBackground: {
    backgroundColor: '#c5c6c6'
  },
  goodBackground: {
    backgroundColor: '#2dcc70'
  },
  poorBackground: {
    backgroundColor: '#f1c30f'
  },
  badBackground: {
    backgroundColor: '#e74d3d'
  },
  accText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
} );