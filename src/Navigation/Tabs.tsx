import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Categorie from '../Screens/Categories/Categorie';
import Favorites from '../Screens/Favorites/Favorites';
import Cart from '../Screens/Cart/Cart';


const Tab = createBottomTabNavigator();

const NavRoot=()=> {
  return (
   
    <Tab.Navigator tabBarOptions ={{
        showLabel:false,
        }}>
     

        <Tab.Screen 
        name='Home'component={Home}options={{tabBarIcon:({focused}) =>(
          <View style ={{alignItems:'center' ,justifyContent:'center', top:10}}>
            <Image style={[style.image, { tintColor: focused ? '#e32f45' : '#748c94' }]}
              source={require('../assets/icons/home.png')}
              resizeMode='contain'/>
              <Text style={[style.text, { color: focused ? '#e32f45' : '#748c94' }]}>HOME</Text>
          </View>
          ), }} />



        <Tab.Screen name='Category' component={Categorie} options={{tabBarIcon:({focused}) =>(
            <View style ={{alignItems:'center' ,justifyContent:'center', top:10}}>
              <Image style={[style.image, { tintColor: focused ? '#e32f45' : '#748c94' }]} 
              source={require('../assets/icons/categorie.png')}
              resizeMode='contain'/>
              <Text style={[style.text, { color: focused ? '#e32f45' : '#748c94' }]}>CATEGORY</Text>
            </View>
            ),}} />



        <Tab.Screen name='Favorites' component={Favorites} options={{tabBarIcon:({focused}) =>(
            <View style ={{alignItems:'center' ,justifyContent:'center', top:10}}>
              <Image style={[style.image, { tintColor: focused ? '#e32f45' : '#748c94' }]}
              source={require('../assets/icons/coeur.png')}
              resizeMode='contain'/>
              <Text style={[style.text, { color: focused ? '#e32f45' : '#748c94' }]}> FAVORITES </Text>
            </View>
            ),}} />


        <Tab.Screen name='Cart' component={Cart} options={{tabBarIcon:({focused}) =>(
            <View style ={{alignItems:'center' ,justifyContent:'center', top:10}}>
              <Image style={[style.image, { tintColor: focused ? '#e32f45' : '#748c94' }]} 
              source={require('../assets/icons/cart.png')}
              resizeMode='contain' />
             <Text style={[style.text, { color: focused ? '#e32f45' : '#748c94' }]}> CART </Text>
            </View>
          ),}} />
                </Tab.Navigator>
 
  );
}

const style = StyleSheet.create({
 shadow:{
  shadowColor:'#7F5DF0',
  shadowOffset:{
    width:0,
    height:10,}
  },
image:{
  width:25,
  height :25,
  
},
  text : {
    
     fontSize:12 ,
     paddingBottom:10
  }  
 }
);
export default NavRoot;
