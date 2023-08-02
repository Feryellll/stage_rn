import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>filtrer</Text>
      <TextInput
        placeholder="Search..."
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  searchInput: {
    flex: 1,
    marginLeft: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
});

export default Header;
