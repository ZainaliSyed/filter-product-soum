import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import productData from './constant';
import TreeView from './component/TreeView';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';

const Main = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedData, setSelectedData] = useState(false);

  const handleSelectNode = (node) => {
    console.log('node ===>', node)
    setSelectedNode(node);
    const selectedOne = [...selectedProduct];
    const isExisted = selectedOne?.filter(elem => elem?.id == node?.id)
    if (isExisted.length == 0) {
      selectedOne.push(node)
      setSelectedProduct(selectedOne)
    } else {
      setSelectedProduct(selectedOne.filter((elem) => elem?.id !== node?.id))      
    }
  };

  return (
    <SafeAreaView style={{ paddingHorizontal: 20 }}>
      {!selectedData && <>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ marginVertical: 20, fontSize: 22, fontWeight: 800 }}>Browse Product</Text>
        </View>
        <TreeView data={productData} onSelectNode={handleSelectNode} />
        <View style={{ borderWidth: 1, marginTop: 40, alignItems: 'center' }}>
          <Text style={{ marginVertical: 20, fontSize: 22, fontWeight: 800 }}>Filtered Products:</Text>
        </View>
        <ProductList
          categories={selectedProduct}
        />
      </>}
      {selectedData && <ProductDetails
        details={selectedProduct}
      />}
      <Button
        title={!selectedData ? 'Submit' : 'Go Back'}
        color={selectedProduct?.length ? 'black' : 'gray'}
        onPress={() => selectedProduct?.length && setSelectedData(prev => !prev)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default Main;