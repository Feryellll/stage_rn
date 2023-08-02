import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Produit 1', price: 10 },
    { id: '2', name: 'Produit 2', price: 15 },
    { id: '3', name: 'Produit 3', price: 20 },
  ]);

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };



  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const CartItem = ({ item }) => {
    return (
      <View style={styles.cartItemContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price} $</Text>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <Image source={require('../../assets/icons/close.png')} style={styles.removeButton} />
        </TouchableOpacity>
      </View>
    );
  };



  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Le panier est vide</Text>
        }
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total : {calculateTotalPrice()} $</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  removeButton: {
    width: 20,
    height: 20,
    tintColor: 'red',},

  cartItemContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  productPrice: {
    fontSize: 16,
    color: '#555555',
  },
 
  emptyMessage: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#555555',
  },
  totalContainer: {
    borderTopWidth: 1,
    paddingTop: 8,
    marginTop: 16,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
