import { useContext } from 'react';
import { Alert } from 'react-native';

// From inside of my project folder.
import MarkerItemList from '../components/MarkerItemList';
import { saveDataToStorage, AppContext } from '../utils/HelperFunctions';
import { vibrateShort } from '../utils/HelperFunctions';

/**
 * Application Marker List View.
 */
export default function MarkerListView( { navigation } ) {
  const { markers, setMarkers } = useContext(AppContext);

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

  return (
    <MarkerItemList markers={ markers } onMarkerPress={ markerPressHandler } onMarkerDeletePress={ markerDeletePress } />
  );
}