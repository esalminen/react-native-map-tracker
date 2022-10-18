import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import { vibrateShort } from '../utils/HelperFunctions';
import CustomButton from '../components/CustomButton';

export default function HomeScreenView( { navigation } ) {
  return (
    <View style={ styles.container }>
      <Image
        style={ styles.logo }
        source={ require( '../assets/maptrackerlogo.png' ) } />
      <View style={ styles.buttonContainer }>
        <CustomButton
          text={ 'Start Tracking Things' }
          onPress={ () => {
            vibrateShort();
            navigation.navigate( 'Tracking' );
          } }
          icon={ require( '../assets/map.png' ) } />
        <CustomButton
          text={ 'View Markers List' }
          onPress={ () => {
            vibrateShort();
            navigation.navigate( 'MarkerList' );
          } }
          icon={ require( '../assets/file.png' ) } />
        <CustomButton
          text={ 'Help' }
          onPress={ () => {
            vibrateShort();
            navigation.navigate( 'Help' );
          } }
          icon={ require( '../assets/information.png' ) } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    marginTop: 30,
    marginBottom: 30,
  },
  buttonContainer: {
    height: '30%',
    padding: 20,
    justifyContent: 'space-between'
  },
} );