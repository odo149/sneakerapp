import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text,FlatList, View,TouchableOpacity,TextInput, Image } from 'react-native';

const SNEAKERconverse =  [{
  id: "166800C_A_107X1",
  title: "RUN STAR HIKE HIGH",
  price: "$110",
  picture:'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw9d0ff752/images/a_107/166800C_A_107X1.jpg?sw=964',
  details: "RUN STAR HIKE HIGH"
},
{
  id: "M7652_D_08X1",
  title: "CHUCK TAYLOR ALL STAR",
  price: "$55",
  picture:'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwd4d59ab3/images/a_107/M7652_A_107X1.jpg?sw=964',
  details: 'CHUCK TAYLOR ALL STAR'
},
{
  id: "171546C_A_107X1",
  title: "RUN STAR MOTION",
  price: "$120",
  picture:'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw977de2d6/images/a_107/171546C_A_107X1.jpg?sw=964',
  details:'RUN STAR MOTION'
},
{
  id: "162054C_A_107X1",
  title: "CHUCK 70",
  price: "$85",
  picture:'https://secure-render.nike.com/ir/render/nikeidrender/CT70CanvasHiHO21_v3?obj=/s/g1/body&color=915D38&show&obj=/s/g2/tong&color=915D38&show&obj=/s/g3/heel&color=915D38&show&obj=/s/g7&color=F9F1DF&show&obj=/s/g9&color=F9F1DF&show&obj=/s/g10&color=c5c2c1&show&obj=/s/g12&color=F9F1DF&show&obj=/s/g13&color=151416&show&obj=/s/g14&color=151416&show&obj=/s/g15/rubber&color=F9F1DF&show&obj=/s/g17&color=F9F1DF&show&obj=/s/g21&color=151416&show&obj=/s/g8&color=F9F1DF&show&obj=/s/g11/00-0484&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406',
  details: 'CHUCK 70'
},
{
  id: "168817C_A_107X1",
  title: "RUN STAR HIKE LOW",
  price: "$100",
  picture:'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw894ace3e/images/a_107/168817C_A_107X1.jpg?sw=964',
  details: 'RUN STAR HIKE LOW'
},
{
  id: "159573C_A_107X1",
  title: "Converse x thisisneverthat One Star",
  price: "$110",
  picture:'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwca3eed44/images/a_1205/172394C_A_1205X1.jpg?sw=964',
  details: 'Converse x thisisneverthat One Star'
},
];


export default function Converseshop({navigation}) {
  const renderItem = ({ item }) => (
    <View style={styles.nikeshoes}>
      <TouchableOpacity onPress={() => navigation.navigate(item.details)}>
        <View style={styles.converseshoes}>
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
  converseshoes: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:20
  },
  itemstyle: {
    fontSize:18
  },
});