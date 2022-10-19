import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// From inside of my project folder.
import HomeScreenView from './views/HomeScreenView';
import TrackingView from './views/TrackingView';
import MarkerListView from './views/MarkerListView';
import HelpView from './views/HelpView';

const Stack = createNativeStackNavigator();

/**
 * Main application component.
 */
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
          options={ { title: 'Saved Markers' } } />
        <Stack.Screen
          name='Help'
          component={ HelpView } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
