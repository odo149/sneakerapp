import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Vansshop from "./screens/Vansshop";
import Adidasshop from './screens/Adidasshop';
import Nikeshop from './screens/Nikeshop';
import Converseshop from './screens/Converseshop';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vans" component={Vansshop} />
        <Stack.Screen name="Converse" component={Converseshop} />
        <Stack.Screen name="Adidas" component={Adidasshop} />
        <Stack.Screen name="Nike" component={Nikeshop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
