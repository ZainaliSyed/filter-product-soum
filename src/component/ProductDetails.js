import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ProductDetails = ({ details }) => {
  return (
    <View style={{paddingHorizontal: 20}}>
      {details.map((detail, index) => (
        <TouchableOpacity key={index} style={{ borderWidth: 1, marginBottom: 5, paddingHorizontal: 20}}
        >
          <Text style={{marginVertical: 5}}>Category:    {detail?.category}</Text>
          <Text style={{marginVertical: 5}}>Brand:    {detail?.brand}</Text>
          <Text style={{marginVertical: 5}}>Color:    {detail?.color}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProductDetails;
