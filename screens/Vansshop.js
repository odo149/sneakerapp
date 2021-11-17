import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text,FlatList,TextInput,TouchableOpacity,View,Image } from 'react-native';

const SNEAKERvans =  [{
  id: "U3CZPN-HERO?$51x51$",
  title: "VANS X THE SHINING CLASSIC SK8-HI",
  price: "$75",
  picture:'https://images.vans.com/is/image/Vans/U3CZPN-HERO?$330x330$',
  details:'VANS X THE SHINING CLASSIC SK8-HI'
},
{
  id: "U3BBOO-HERO?$330x330$",
  title: "VANS X THE EXORCIST OLD SKOOL",
  price: "$75",
  picture:'https://images.vans.com/is/image/Vans/U3BBOO-HERO?$330x330$',
  details:'VANS X THE EXORCIST OLD SKOOL'
},
{
  id: "JI3Y28-HERO?$330x330$",
  title: "SNOW LODGE SLIPPER MID VANSGRD",
  price: "$80",
  picture:'https://images.vans.com/is/image/Vans/JI3Y28-HERO?$330x330$',
  details:'SNOW LODGE SLIPPER MID VANSGRD'
},
{
  id: "4F29GT-HERO?$330x330$",
  title: "VANS X PENDLETON ANAHEIM FACTORY AUTHENTIC 44 DX",
  price: "$95",
  picture:'https://images.vans.com/is/image/Vans/4F29GT-HERO?$330x330$',
  details: 'VANS X PENDLETON ANAHEIM FACTORY AUTHENTIC 44 DX'
},
{
  id: "KRD8EE-HERO?$330x330$",
  title: "AUTHENTIC",
  price: "$50",
  picture:'https://images.vans.com/is/image/Vans/KRD8EE-HERO?$330x330$',
  details: 'AUTHENTIC'
},
{
  id: "JMCOS7-HERO?$330x330$",
  title: "STAPLE COAST CC",
  price: "$110",
  picture:'https://images.vans.com/is/image/Vans/JMCOS7-HERO?$330x330$',
  details: 'STAPLE COAST CC'
},
];


export default function Vansshop({navigation}) {
  const renderItem = ({ item }) => (
    <View style={styles.nikeshoes}>
      <TouchableOpacity onPress={() => navigation.navigate(item.details)}>
        <View style={styles.vansshoes}>
      <Image resizeMode='contain' style={{height:300,width:400,borderRadius:20}} source={{uri:item.picture}}/>
      <Text style={styles.itemstyle}>{item.title}</Text>
      <Text>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection:'row',
        backgroundColor:'#e8e9eb',
        justifyContent: 'space-between',
        margin: 5,
        padding:20,
        borderRadius:30,
        width:350}}>
          <AntDesign name="search1" size={24} color="black" />     
          <TextInput style={{color:'black',width:250}} placeholder='Search here'/>
          <TouchableOpacity>        
            <Feather name="menu" size={24} color="black" />       
          </TouchableOpacity>
        </View>
      <FlatList
        data={SNEAKERvans}
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
  vansshoes: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  itemstyle: {
    fontSize:18
  },
});