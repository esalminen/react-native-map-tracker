import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';

// From inside of my project folder.
import { HELP_ITEMS } from '../utils/Constants';
import HelpItem from '../components/HelpItem';

export default function HelpView() {
  return (
    <ScrollView style={styles.container}>
      { HELP_ITEMS.map((item, index)=><HelpItem
                                        key={index}
                                        title={item.title} 
                                        description={item.description}
                                        icon={item.icon}/>
                                        )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});