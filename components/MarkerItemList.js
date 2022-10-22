import { ScrollView, View, Text, StyleSheet } from 'react-native';
import MarkerItem from './MarkerItem';

export default function MarkerItemList( { markers, onMarkerPress, onMarkerDeletePress } ) {

  if ( !markers ) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <ScrollView style={ styles.container }>
      { markers.map( ( item ) => <MarkerItem key={ item.key } marker={ item } onMarkerPress={ onMarkerPress } onMarkerDeletePress={ onMarkerDeletePress} /> ) }
    </ScrollView>
  );
}

const styles = StyleSheet.create( {
  container: {
    height: '100%',
    backgroundColor: '#fff',
    padding: 10,
  },
} );