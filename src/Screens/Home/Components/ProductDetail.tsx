import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Product } from '../../../Domain/product';



interface ProductDetailProps {
  loading: boolean;
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = () => {
    const { product, loading, error } = useSelector((state: any) => state.productReducer);
    const navigation = useNavigation();
    if (loading) {
        return <Text>Loading...</Text>;
      }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.backButton}>
          <Text style={styles.backButtonText}>
            <i className="fa fa-long-arrow-left" /> Back
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.category}>in {product.category}</Text>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${product.price}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.description}>{product.description}</Text>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 66,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  backButtonText: {
    color: 'black',
    marginLeft: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  category: {
    textTransform: 'capitalize',
    color: 'gray',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
 
 
  priceContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
  },
  buyButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buyButtonText: {
    color: 'black',
    textTransform: 'uppercase',
  },
});

export default ProductDetail;