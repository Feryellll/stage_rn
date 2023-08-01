import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Categorie = () => {
  return (
    <View style={styles.container}>
      <Text>CATEGORY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: 'bold',
    backgroundColor: '#d5eef0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Categorie;
