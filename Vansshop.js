import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View, Image } from 'react-native';

const SNEAKERvans =  [{
  id: "U3CZPN-HERO?$51x51$",
  title: "VANS X THE SHINING CLASSIC SK8-HI",
  price: "$75",
  picture:'https://images.vans.com/is/image/Vans/U3CZPN-HERO?$330x330$'
},
{
  id: "U3BBOO-HERO?$330x330$",
  title: "VANS X THE EXORCIST OLD SKOOL",
  price: "$75",
  picture:'https://images.vans.com/is/image/Vans/U3BBOO-HERO?$330x330$'
},
{
  id: "JI3Y28-HERO?$330x330$",
  title: "SNOW LODGE SLIPPER MID VANSGRD",
  price: "$80",
  picture:'https://images.vans.com/is/image/Vans/JI3Y28-HERO?$330x330$'
},
{
  id: "4F29GT-HERO?$330x330$",
  title: "VANS X PENDLETON ANAHEIM FACTORY AUTHENTIC 44 DX",
  price: "$95",
  picture:'https://images.vans.com/is/image/Vans/4F29GT-HERO?$330x330$'
},
{
  id: "KRD8EE-HERO?$330x330$",
  title: "AUTHENTIC",
  price: "$50",
  picture:'https://images.vans.com/is/image/Vans/KRD8EE-HERO?$330x330$'
},
{
  id: "JMCOS7-HERO?$330x330$",
  title: "STAPLE COAST CC",
  price: "$110",
  picture:'https://images.vans.com/is/image/Vans/JMCOS7-HERO?$330x330$'
},
];

const renderItem = ({ item }) => (
  <View style={styles.nikeshoes}>
    <Image resizeMode='contain' style={{height:300,width:400}} source={{uri:item.picture}}/>
    <Text style={styles.itemstyle}>{item.title}</Text>
    <Text>{item.price}</Text>
  </View>
);

export default function Vansshop() {
  return (
    <View style={styles.container}>
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
  nikeshoes: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemstyle: {
    fontSize:18
  },
});