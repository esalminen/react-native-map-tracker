import { View, Text, Image, StyleSheet } from 'react-native';

export default function HelpItem( { title, description, image } ) {
  return (
    <View style={ styles.container }>
      <View style={ styles.imageContainer }>
        <Image
          style={ styles.image }
          resizeMode='contain'
          source={ image } />
      </View>
      <Text style={styles.descriptionText}>{ description }</Text>
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
  },
  imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '90%',
  },
  descriptionText: {
    textAlign: 'left',
    borderBottomWidth: 3,
    borderBottomColor: '#ddd',
    
  },
} );