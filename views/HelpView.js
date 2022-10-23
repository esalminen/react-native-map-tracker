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
          description={ `1. Show tracking view 
            \n2. Show saved markers view 
            \n3. Show help view (this view)
          ` }
          image={ HELP_SCREENS[ 'main_help' ] }
        />
        <HelpItem
          title={ 'Map Tracking' }
          description={ `1. Updates the user location and moves the red marker to user location. 
          \n2. Select a marker icon for the new marker. 
          \n3. Insert description for the new marker (optional). 
          \n4. Add the new marker with selected icon and description text to the current location of the red marker. 
          \n5. Move the map to the users current location. 
          \n6. Zooms the map in/out. 
          \n7. Navigation/Google Maps buttons are shown when user presses marker on the map. Use buttons to navigate to the marker location or open marker location in Google Maps. 
          \n8. Red marker can be moved manually by pressing it more than 0.5 s. It is useful when user wants to place new marker to some other location than where user is currently at. 
          \n9. Marker id and description are shown on the map when marker is pressed. 
          \n10. Current GPS accuracy is shown here with reading and background color ( green < 10 m < yellow < 20 m < red). User can try to improve accuracy with Update location (1.) button.
          ` }
          image={ HELP_SCREENS[ 'tracking_help' ] }
        />
        <HelpItem
          title={ 'Saved Markers' }
          description={ `1. User can move to the map location of the marker by pressing this icon. 
            \n2. User can delete marker from the list with the delete button. A confirmation pop-up with ok/cancel choices are shown before deleting the marker. 
            \n3. User can copy all the marker data to clipboard as a JSON string.
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