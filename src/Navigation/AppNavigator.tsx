// AppNavigator.tsx
import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import ProductList from '../Screens/Home/Components/listProduct';
import ProductDetail from '../Screens/Home/Components/ProductDetail';
import NavRoot from './Tabs';

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { productId: number }; 
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={NavRoot} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
