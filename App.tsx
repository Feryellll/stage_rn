/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import NavRoot from './src/Navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/Redux/Store';
import { Provider } from 'react-redux';
import AppNavigator from './src/Navigation/AppNavigator';


const App=()=>{
 
  return (
    <Provider store={store}>
    <NavigationContainer >

     <AppNavigator />
     </NavigationContainer>
     </Provider>
  );
}


export default App;
