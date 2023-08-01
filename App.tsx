/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import NavRoot from './src/Navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/Redux/Store';
import { Provider } from 'react-redux';


const App=()=>{
 
  return (
    <Provider store={store}>
    <NavigationContainer >
     <NavRoot/>
     </NavigationContainer>
     </Provider>
  );
}


export default App;
