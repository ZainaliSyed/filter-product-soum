import React from 'react';
import {StyleSheet, Text, View, Pressable, Alert} from 'react-native';

const Card = ({title, category, price,onPress,style}) => {
  return (
    <Pressable 
    style={[styles.container, style]}
    onPress={onPress}
    >
        <Text style={styles.red}>Product Name: {title}</Text>
        <Text style={styles.red}>Category: {category}</Text>
        <Text style={styles.red}>Price: {price}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  red: {
    color: 'black',
  },
});

export default Card;
