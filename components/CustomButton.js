import { Pressable, Text, StyleSheet, Image } from 'react-native';

export default function CustomButton( { onPress, icon, text } ) {
  return (
    <Pressable
      style={ styles.customButton }
      onPress={ onPress }
    >
      <Image
        style={ styles.buttonIcon }
        source={ icon } />
      <Text>{ text }</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create( {
  customButton: {
    backgroundColor: '#00c3ff',
    padding: 10,
    borderWidth: 2,
    borderColor: '#00aaf0',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonIcon: {
    height: 32,
    width: 32,
    marginRight: 10,
  },
} );