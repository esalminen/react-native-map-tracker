import { View, StyleSheet, Image } from 'react-native';
import React from 'react';

// From inside of my project folder.
import { vibrateShort } from '../utils/HelperFunctions';
import CustomButton from '../components/CustomButton';
import { ICONS } from '../utils/Constants';

export default function HomeScreenView( { navigation } ) {
  return (
    <View style={ styles.container }>
      <Image
        style={ styles.logo }
        source={ ICONS[ 'logo' ] } />
      <View style={ styles.buttonContainer }>
        <CustomButton
          text={ 'Start Tracking Things' }
          onPress={ () => {
            vibrateShort();
            navigation.navigate( 'Tracking' );
          } }
          icon={ ICONS[ 'tracking' ] } />
        <CustomButton
          text={ 'View Markers List' }
          onPress={ () => {
            vibrateShort();
            navigation.navigate( 'MarkerList' );
          } }
          icon={ ICONS[ 'markers' ] } />
        <CustomButton
          text={ 'Help' }
          onPress={ () => {
            vibrateShort();
            navigation.navigate( 'Help' );
          } }
          icon={ ICONS[ 'help' ] } />
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