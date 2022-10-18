import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import HomeScreenView from './views/HomeScreenView';
import TrackingView from './views/TrackingView';
import MarkerListView from './views/MarkerListView';
import HelpView from './views/HelpView';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={ HomeScreenView }
          options={ { title: 'Main Menu' } } />
        <Stack.Screen
          name='Tracking'
          component={ TrackingView } 
          options={ { title: 'Map Tracking' } } />
        <Stack.Screen
          name='MarkerList'
          component={ MarkerListView }
          options={ { title: 'Saved Marker List' } } />
        <Stack.Screen
          name='Help'
          component={ HelpView } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight * 1.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
} );
