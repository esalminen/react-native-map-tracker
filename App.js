import * as Location from 'expo-location';
import { useEffect, useState, createContext } from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// From inside of my project folder.
import { getDataFromStorage } from './utils/HelperFunctions';
import HomeScreenView from './views/HomeScreenView';
import TrackingView from './views/TrackingView';
import MarkerListView from './views/MarkerListView';
import HelpView from './views/HelpView';

// Stack navigating object.
const Stack = createNativeStackNavigator();

// Use context to deliver state reference to views.
export const AppContext = createContext( null );

/**
 * Main application component.
 */
export default function App() {
  const [ markers, setMarkers ] = useState( [] );
  const [ location, setLocation ] = useState( null );

  //Use-effect hook searches initial location and gets marker data from async storage.
  useEffect( () => {
    ( async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if ( status !== 'granted' ) {
        Alert.alert(
          'Permission to access location was denied',
          'Please give the required permission from the device settings',
          [
            {
              text: 'Ok',
              style: 'default',
            },
          ]
        );
        return;
      }
      const location = await Location.getCurrentPositionAsync( { accuracy: Location.Accuracy.BestForNavigation } );
      const data = await getDataFromStorage();

      setLocation( location );
      setMarkers( data );
    } )();
  }, [] );

  return (
    <AppContext.Provider value={ { markers: markers, setMarkers: setMarkers, location: location, setLocation: setLocation} }>
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
    </AppContext.Provider>
  );
}
