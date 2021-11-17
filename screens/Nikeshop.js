import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text,FlatList, View,TextInput,TouchableOpacity, Image } from 'react-native';

const SNEAKERnike =  [{
  id: "07e3ab81-b7ab-41c9-8f31-6c6813e72823",
  title: "Nike Air Presto",
  price: "$150",
  picture:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a04da4ac-13b8-47dd-adda-d2fecdf82baf/air-presto-id-shoe.png',
  details: "Nike Air Presto"
},
{
  id: "ce857dd3-7b74-44fd-84d9-190f0333a831",
  title: "Air Max 270",
  price: "$150",
  picture:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ouweg5dax808k3vqipcr/air-max-270-womens-shoes-Pgb94t.png',
  details: "Air Max 270"
},
{
  id: "a9e72069-93be-446d-8040-004f07a32b62",
  title: "Nike Dunk Low",
  price: "$95",
  picture:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/24e6bbc2-64af-4449-ace6-09d154a69484/dunk-low-big-kids-shoes-lpWtVW.png',
  details: "Nike Dunk Low"
},
{
  id: "de8051ab-d567-400f-aea1-52fa58ecc910",
  title: "Jordan Stay Loyal",
  price: "$110",
  picture:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99d66ef6-0179-4629-b634-1ade8772523e/jordan-stay-loyal-shoes-tdsMgH.png',
  details: "Jordan Stay Loyal"
},
{
  id: "6bf47533-8f67-4614-b0e2-4c5b8ccce1bc",
  title: "Air Jordan 1 Low ",
  price: "$100",
  picture:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/247838ab-7f64-4003-b409-832d1ac04b8b/air-jordan-1-low-shoes-z3Tl2VeJ.png',
  details: "Air Jordan 1 Low"
},
{
  id: "1e7dbcfe-c957-46cd-8845-13925dac38ff",
  title: "Air Force 1'07 LX",
  price: "$120",
  picture:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e7dbcfe-c957-46cd-8845-13925dac38ff/air-force-1-07-lx-shoes.png',
  details: "Air Force 1'07 LX"
},
];


export default function Nikeshop({navigation}) {
  const renderItem = ({ item }) => (
    <View style={styles.nikeshoes}>
      <TouchableOpacity onPress={() => navigation.navigate(item.details)}>
        <View style={styles.nikeshoes}>
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
        data={SNEAKERnike}
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
    paddingBottom:20
  },
  itemstyle: {
    fontSize:18
  },
});