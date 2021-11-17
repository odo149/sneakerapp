import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Login from "./screens/Login";
import signup from "./screens/signup";
import Vansshop from "./screens/Vansshop";
import Adidasshop from './screens/Adidasshop';
import Nikeshop from './screens/Nikeshop';
import Converseshop from './screens/Converseshop';
import Air_Force from './screens/Air_Force';
import Air_Max_270 from './screens/Air_Max_270';
import Nike_Dunk from './screens/Nike_Dunk';
import Jordan_Stay from './screens/Jordan_Stay';
import Air_Jordan_1 from './screens/Air_Jordan_1';
import Nike_Presto from './screens/Nike_Presto';
import Ozelia from './screens/Ozelia';
import Nizza from './screens/Nizza';
import Oat from './screens/Oat';
import SanSmith from './screens/SanSmith';
import yeezy_700 from './screens/yeezy_700';
import gore from './screens/gore';
import exorcist from './screens/exorcist';
import staple from './screens/staple';
import vansgrd from './screens/vansgrd';
import classic from './screens/classic';
import authentic from './screens/authentic';
import pendleton from './screens/pendleton';
import conspro from './screens/conspro';
import motion from './screens/motion';
import hikelow from './screens/hikelow';
import hikehigh from './screens/hikehigh';
import chuck from './screens/chuck';
import allstar from './screens/allstar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name=" " component={signup} />
        <Stack.Screen screenOptions={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="Vans" component={Vansshop} />
        <Stack.Screen name="Converse" component={Converseshop} />
        <Stack.Screen name="Adidas" component={Adidasshop} />
        <Stack.Screen name="Nike" component={Nikeshop} />
        <Stack.Screen name="Air Force 1'07 LX" component={Air_Force} />
        <Stack.Screen name="Air Max 270" component={Air_Max_270} />
        <Stack.Screen name="Nike Dunk Low" component={Nike_Dunk} />
        <Stack.Screen name="Jordan Stay Loyal" component={Jordan_Stay} />
        <Stack.Screen name="Air Jordan 1 Low" component={Air_Jordan_1} />
        <Stack.Screen name="Nike Air Presto" component={Nike_Presto} />
        <Stack.Screen name="Ozelia" component={Ozelia} />
        <Stack.Screen name="Nizza Trefoil Shoes" component={Nizza} />
        <Stack.Screen name="San Smith Shoes" component={SanSmith} />
        <Stack.Screen name="ZX 2K BOOST UTILITY GORE-TEX SHOES" component={gore} />
        <Stack.Screen name="YEEZY BOOST 350 V2 MX OAT" component={Oat} />
        <Stack.Screen name="YEEZY 700" component={yeezy_700} />
        <Stack.Screen name="VANS X THE SHINING CLASSIC SK8-HI" component={classic} />
        <Stack.Screen name="VANS X PENDLETON ANAHEIM FACTORY AUTHENTIC 44 DX" component={pendleton} />
        <Stack.Screen name="STAPLE COAST CC" component={staple} />
        <Stack.Screen name="SNOW LODGE SLIPPER MID VANSGRD" component={vansgrd} />
        <Stack.Screen name="VANS X THE EXORCIST OLD SKOOL" component={exorcist} />
        <Stack.Screen name="AUTHENTIC" component={authentic} />
        <Stack.Screen name="CHUCK 70" component={chuck} />
        <Stack.Screen name="CHUCK TAYLOR ALL STAR" component={allstar} />
        <Stack.Screen name="RUN STAR HIKE HIGH" component={hikehigh} />
        <Stack.Screen name="RUN STAR HIKE LOW" component={hikelow} />
        <Stack.Screen name="RUN STAR MOTION" component={motion} />
        <Stack.Screen name="Converse x thisisneverthat One Star" component={conspro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
