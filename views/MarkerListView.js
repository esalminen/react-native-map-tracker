import React, { useEffect, useState } from 'react';
import MarkerItemList from '../components/MarkerItemList';
import { getDataFromStorage, saveDataToStorage } from '../utils/HelperFunctions';

export default function MarkerListView({navigation}) {
  const [ markers, setMarkers ] = useState( null );

  useEffect( () => {
    ( async () => {
      const markersData = await getDataFromStorage();
      setMarkers( markersData );
    } )();
  }, [] );


  return (
    <MarkerItemList markers={ markers } />
  );
}