import { useContext, useLayoutEffect } from 'react';
import { Alert, Image, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

// From inside of my project folder.
import { ICONS } from '../utils/Constants';
import MarkerItemList from '../components/MarkerItemList';
import { saveDataToStorage, AppContext, showNotification } from '../utils/HelperFunctions';
import { vibrateShort } from '../utils/HelperFunctions';

/**
 * Application Marker List View.
 */
export default function MarkerListView( { navigation } ) {
  const { markers, setMarkers } = useContext( AppContext );

  // Add copy to clipboard button to the top bar
  useLayoutEffect( () => {
    navigation.setOptions( {
      headerRight: () => (
        <Pressable onPress={ copyToClipboard }>
          <Image
            source={ ICONS[ 'clipboard' ] }
            style={ { width: 32, height: 32 } }
          />
        </Pressable>
      ),
    } );
  }, [] );

  /**
   * Navigates to selected marker.
   * @param {markerObject} marker 
   */
  function markerPressHandler( marker ) {
    vibrateShort();
    navigation.navigate( 'Tracking', { marker: marker } );
  }

  /**
   * Deletes selected marker if user confirms deletion.
   * @param {markerObject} marker 
   */
  function markerDeletePress( marker ) {
    vibrateShort();
    Alert.alert(
      `Delete ${ marker.title }`,
      'Confirm Deletion?',
      [
        {
          text: 'Cancel',
          onPress: () => vibrateShort(),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            vibrateShort();
            const newMarkers = markers.filter( ( m ) => m.id != marker.id );
            setMarkers( newMarkers );
            saveDataToStorage( newMarkers );
          },
          style: 'default',
        }
      ]
    );
  }

  /**
   * Copy markerlist to clipboard as a stringified JSON.
   */
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync( JSON.stringify( markers ) );
    showNotification( 'Marker data saved to clipboard' );
  };

  return (
    <MarkerItemList markers={ markers } onMarkerPress={ markerPressHandler } onMarkerDeletePress={ markerDeletePress } />
  );
}