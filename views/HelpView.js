import { StyleSheet, ScrollView, View } from 'react-native';

// From inside of my project folder.
import { HELP_SCREENS } from '../utils/Constants';
import HelpItem from '../components/HelpItem';

export default function HelpView() {
  return (
    <ScrollView style={ styles.container }>
      <View>
        <HelpItem
          title={ 'Main Menu' }
          description={ `
            1. Show tracking view \n
            2. Show saved markers view \n
            3. Show help view (this view)
          ` }
          image={ HELP_SCREENS[ 'main_help' ] }
        />
        <HelpItem
          title={ 'Map Tracking' }
          description={ `
            1. Updates the user location and moves the red marker to that location. \n
            2. Select a marker icon for the new marker. \n
            3. Insert optional description for the new marker. \n
            4. Add the new marker with selected icon and description text to the current location of the red marker. \n
            5. Moves the map to the users current location. \n
            6. Zooms the map in/out. \n
            7. Navigation buttons are shown when user presses marker on the map. \n
            8. Red marker can be moved manually by pressing it > 0.5 s. Handy when user wants to place new marker to some other location than where user is currently. \n
            9. Marker id and description are shown on the map when marker is pressed. \n
            10. Current GPS accuracy is shown here with reading and background color. User can try to improve accuracy with Update location (1.) -button.
          ` }
          image={ HELP_SCREENS[ 'tracking_help' ] }
        />
        <HelpItem
          title={ 'Saved Markers' }
          description={ `
            1. User can move to the map location of the marker by pressing this icon. \n
            2. User can delete marker from the list with delete button. Confirmation pop-up with ok/cancel choices are shown before deleting the marker. \n
            3. User can copy all marker data to clipboard as a JSON string. \n
          ` }
          image={ HELP_SCREENS[ 'markerlist_help' ] }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
  }
} );