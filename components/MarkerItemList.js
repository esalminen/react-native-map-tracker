import { ScrollView, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MarkerItem from './MarkerItem';

export default function MarkerItemList({markers}) {

  if(!markers) {
    return <View><Text>Nothing to see here... (no markers)</Text></View>;
  }
  
  return (
    <ScrollView style={styles.container}>
      {markers.map((item) => <MarkerItem key={item.id} marker={item}/>)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    padding: 10,
  },
});