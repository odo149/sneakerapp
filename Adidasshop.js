import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text,FlatList,TouchableOpacity, View, Image, TextInput } from 'react-native';

const SNEAKERadidas =  [{
  id: "d50e8022543e46b28c85ad2600b44567_9366",
  title: "Ozelia",
  price: "$100",
  picture:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d50e8022543e46b28c85ad2600b44567_9366/Ozelia_Shoes_Grey_H04252_01_standard.jpg'
},
{
  id: "f0099bf17dc6467d937cab7601238651_9366",
  title: "Nizza Trefoil Shoes",
  price: "$150",
  picture:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/de91f7b7f92e400c872eab7601227aea_9366/Nizza_Trefoil_Shoes_Black_FW5185_01_standard.jpg'
},
{
  id: "68ae7ea7849b43eca70aac1e00f5146d_9366",
  title: "San Smith Shoes",
  price: "$85",
  picture:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg'
},
{
  id: "41d85484a48a4f048ea4ad5600b330d0_9366",
  title: "ZX 2K BOOST UTILITY GORE-TEX SHOES",
  price: "$126",
  picture:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/41d85484a48a4f048ea4ad5600b330d0_9366/ZX_2K_Boost_Utility_GORE-TEX_Shoes_Beige_H05319_01_standard.jpg'
},
{
  id: "17414811_36362431_1000",
  title: "YEEZY BOOST 350 V2 MX Oat",
  price: "$360",
  picture:'https://img.stadiumgoods.com/17/41/48/11/17414811_36362431_1000.jpg'
},
{
  id: "1e7dbcfe-c957-46cd-8845-13925dac38ff",
  title: "YEEZY 700",
  price: "$278",
  picture:'https://img.stadiumgoods.com/17/46/72/15/17467215_36295937_1000.jpg'
},
];

const renderItem = ({ item }) => (
  <View style={styles.nikeshoes}>
    <TouchableOpacity>
      <View style={styles.adidashoes}>
    <Image resizeMode='contain' style={{height:300,width:400}} source={{uri:item.picture}}/>
    <Text style={styles.itemstyle}>{item.title}</Text>
    <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default function Adidasshop() {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection:'row',
        backgroundColor:'#e8e9eb',
        marginTop:30,
        marginBottom:30,
        padding:20,
        borderRadius:30,
        width:350}}>
        <View stlye={{flex:3,padding:20}}>
        <AntDesign name="search1" size={24} color="black" />
        </View>
        <View style={{flex:7,alignContent:'flex-start',width:300}}>
        <TextInput style={{color:'black'}} placeholder='Search here'/>
        </View>
        <TouchableOpacity>
        <View style={{flex:1}}>
        <Feather name="menu" size={24} color="black" />
        </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={SNEAKERadidas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adidashoes: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:20
  },
  itemstyle: {
    fontSize:18
  },
});