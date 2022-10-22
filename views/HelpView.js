import { StyleSheet, ScrollView, View } from 'react-native';

// From inside of my project folder.
import { HELP_SCREENS } from '../utils/Constants';
import HelpItem from '../components/HelpItem';

export default function HelpView() {
  return (
    <ScrollView style={ styles.container }>
      <View>
        <HelpItem
          title={ 'Main screen' }
          description={ 'test' }
          image={ HELP_SCREENS[ 'main_help' ] }
        />
        <HelpItem
          title={ 'Main screen' }
          description={ 'test' }
          image={ HELP_SCREENS[ 'tracking_help' ] }
        />
        <HelpItem
          title={ 'Main screen' }
          description={ 'test' }
          image={ HELP_SCREENS[ 'markerlist_help' ] }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
  }
} );