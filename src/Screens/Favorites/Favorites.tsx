import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const FavoritesScreen = () => {
  const [favoriteItems, setFavoriteItems] = useState([
    { id: '1', name: 'Produit 1', price: 10 },
    { id: '3', name: 'Produit 3', price: 20 },
  ]);

  const removeFromFavorites = (itemId:string) => {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };


  const renderFavoriteItem = ({ item}) => {
    return (
    <View style={styles.favoriteItemContainer}>
     <Text style={styles.productName}>{item.name}</Text>
     <Text style={styles.productPrice}>{item.price} $</Text>
     <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
     <Image source={require('../../assets/icons/close.png')} style={styles.removeButton} />
     </TouchableOpacity>
    </View>
    );
  };

  return (
    <View style={styles.container}>
    <FlatList
     data={favoriteItems}
     renderItem={renderFavoriteItem}
     keyExtractor={(item) => item.id}
     ListEmptyComponent={
    <Text style={styles.emptyMessage}>Aucun article dans les favoris</Text>
     }/>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  favoriteItemContainer: {
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
  removeButton: {
    width: 20,
    height: 20,
    tintColor: 'red',
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#555555',
  },
});

export default FavoritesScreen;