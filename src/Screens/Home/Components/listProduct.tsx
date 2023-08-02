import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import { fetchProducts } from '../../../Redux/FetchProduct/Actions'; 
import { RootStackParamList } from '../../../Navigation/AppNavigator';



const windowWidth = Dimensions.get('window').width;

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state: any) => state.productReducer); 
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error}</Text>;
  }

 const handleProductLike = (productId: number) => {

  };



  const navigateToProductDetail = (productId: number) => {
    navigation.navigate('ProductDetail', { productId });
  };





  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
             <TouchableOpacity onPress={() => navigateToProductDetail(item.id)}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName} numberOfLines={2}>{item.title}</Text>
              <Text style={styles.productPrice}>Price: ${item.price}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.heartButton} onPress={() => handleProductLike(item.id)}>
              <Text>❤️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
    padding: 8,
  },
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  productImage: {
    width: windowWidth / 4 - 32,
    height: windowWidth / 4 - 32,
    resizeMode: 'contain',
    marginBottom: 8,
    alignSelf: 'center',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 12,
    textAlign: 'center',
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
});

export default ProductList;
