import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View, Image } from 'react-native';

const SNEAKERconverse =  [{
  id: "166800C_A_107X1",
  title: "RUN STAR HIKE",
  price: "$110",
  picture:'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw9d0ff752/images/a_107/166800C_A_107X1.jpg?sw=964'
},
{
  id: "M7652_D_08X1",
  title: "CHUCH TAYLOR ALL STAR",
  price: "$55",
  picture:'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwf1702069/images/d_08/M7652_D_08X1.jpg?sw=406'
},
{
  id: "171546C_A_107X1",
  title: "RUN STAR MOTION",
  price: "$120",
  picture:'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw977de2d6/images/a_107/171546C_A_107X1.jpg?sw=964'
},
{
  id: "162054C_A_107X1",
  title: "CHUCK 70",
  price: "$85",
  picture:'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw375292d6/images/a_107/162054C_A_107X1.jpg?sw=964'
},
{
  id: "168817C_A_107X1",
  title: "RUN STAR HIKE",
  price: "$100",
  picture:'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw894ace3e/images/a_107/168817C_A_107X1.jpg?sw=964'
},
{
  id: "159573C_A_107X1",
  title: "CONS CTAS PRO",
  price: "$75",
  picture:'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw60afe6ee/images/a_107/159573C_A_107X1.jpg?sw=964'
},
];

const renderItem = ({ item }) => (
  <View style={styles.nikeshoes}>
    <Image resizeMode='contain' style={{height:300,width:400}} source={{uri:item.picture}}/>
    <Text style={styles.itemstyle}>{item.title}</Text>
    <Text>{item.price}</Text>
  </View>
);

export default function Converseshop() {
  return (
    <View style={styles.container}>
      <FlatList
        data={SNEAKERconverse}
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