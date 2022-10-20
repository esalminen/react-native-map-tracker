import { View, StyleSheet, Image } from 'react-native';

// From inside of my project folder.
import CustomButton from '../components/CustomButton';
import { ICONS } from '../utils/Constants';
import { vibrateShort } from '../utils/HelperFunctions';

/**
 * Application Home Screen.
 */
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
  },
  logo: {
    marginTop: 30,
    marginBottom: 30,
  },
  buttonContainer: {
    padding: 20,
  },
} );