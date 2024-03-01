import React from 'react';
import {StyleSheet, Text, View, Pressable, Alert} from 'react-native';

const Tag = ({title, onPress,style}) => {
  return (
    <Pressable 
    style={[styles.container, style]}
    onPress={onPress}
    >
      <Text style={styles.red}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  red: {
    color: 'blue',
  },
});

export default Tag;
