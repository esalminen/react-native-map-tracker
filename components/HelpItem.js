import { View, Text, Image, StyleSheet } from 'react-native';

export default function HelpItem( { title, description, image } ) {
  return (
    <View style={ styles.container }>
      <View>
        <Image
          style={ styles.image }
          resizeMode='contain'
          source={ image } />
        <Text>{ title }</Text>
      </View>
      <Text>{ description }</Text>
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
  rowContainer: {

  },
  image: {
    width: '60%',
  },
  helpTitle: {

  },
  helpDescription: {

  },
} );