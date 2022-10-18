import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function HelpItem( { title, description, icon } ) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={ styles.buttonIcon }
          source={ icon } />
        <Text>{ title }</Text>
      </View>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
  rowContainer: {

  },
  buttonIcon: {
    height: 32,
    width: 32,
  },
  helpTitle: {

  },
  helpDescription: {

  },
});