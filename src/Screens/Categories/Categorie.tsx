import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoriesScreen = () => {
  const navigateToCategory = (category) => {


    console.log('Navigating to:', category);
  };

  // Tableau de catégories
  const categories = [
    { id: 'jewelry', name: 'Jewelry' },
    { id: 'clothes', name: 'Clothes' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'Bags', name: 'Bags' },
    { id: 'Sneakers', name: 'Sneakers' },
  ];

  const renderCategoryTile = (category) => {
    return (
      <TouchableOpacity
        style={[
          styles.categoryTile,
          { backgroundColor: getCategoryTileColor(category.id) },
        ]}
        onPress={() => navigateToCategory(category.name)}
      >
        <Text style={styles.categoryTileText}>{category.name}</Text>
      </TouchableOpacity>
    );
  };

  const getCategoryTileColor = (categoryId) => {
    switch (categoryId) {
      case 'jewelry':
        return '#d4281c';
      case 'clothes':
        return '#d4281c';
      case 'electronics':
        return '#d4281c';
        case 'Bags':
          return '#d4281c';
        case 'Sneakers':
        return '#d4281c';
      default:
        return '#ccc';
    }
  };

  return (
    <View style={styles.container}>
      {categories.map((category) => renderCategoryTile(category))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  categoriesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTile: {
    width: 320,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 8,
  },
  categoryTileText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CategoriesScreen;
