import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoriesScreen = () => {
  const navigateToCategory = (category) => {
    console.log('Navigating to:', category);
  };

 
  const categories = [
    { id: 'jewelry', name: 'Jewelry' },
    { id: 'clothes', name: 'Clothes' },
    { id: 'electronics', name: 'Electronics' },
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
        return '#F5A623';
      case 'clothes':
        return '#50E3C2';
      case 'electronics':
        return '#4A90E2';
      default:
        return '#ccc';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => renderCategoryTile(category))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categoriesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTile: {
    width: 100,
    height: 80,
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