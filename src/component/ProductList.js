import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ProductList = ({ onSelectCategory, categories }) => {
  return (
    <View style={{paddingHorizontal: 20}}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} 
        >
          <Text style={{marginVertical: 5}}>{category?.selectedName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProductList;
