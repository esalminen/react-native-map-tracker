import React, { useEffect, useState } from 'react';
import MarkerItemList from '../components/MarkerItemList';
import { getDataFromStorage, saveDataToStorage } from '../utils/HelperFunctions';

export default function MarkerListView( { navigation } ) {
  const [ markers, setMarkers ] = useState( null );

  function markerPressHandler( marker ) {
    navigation.navigate( 'Tracking', { marker: marker } );
  }

  useEffect( () => {
    ( async () => {
      const markersData = await getDataFromStorage();
      setMarkers( markersData );
    } )();
  }, [] );

  return (
    <MarkerItemList markers={ markers } onMarkerPress={ markerPressHandler } />
  );
}