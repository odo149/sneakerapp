import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text,FlatList, View,TextInput,TouchableOpacity, Image } from 'react-native';

const SNEAKERnike =  [{
  id: "07e3ab81-b7ab-41c9-8f31-6c6813e72823",
  title: "Nike Air Presto",
  price: "$130",
  picture:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07e3ab81-b7ab-41c9-8f31-6c6813e72823/air-presto-shoes-G77C1x.png'
},
{
  id: "ce857dd3-7b74-44fd-84d9-190f0333a831",
  title: "Air Max 270",
  price: "$150",
  picture:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ce857dd3-7b74-44fd-84d9-190f0333a831/air-max-270-shoes-j5S3GP.png'
},
{
  id: "a9e72069-93be-446d-8040-004f07a32b62",
  title: "Nike Dunk Low Retro",
  price: "$100",
  picture:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a9e72069-93be-446d-8040-004f07a32b62/dunk-low-retro-mens-shoes.png'
},
{
  id: "de8051ab-d567-400f-aea1-52fa58ecc910",
  title: "Jordan Stay Loyal",
  price: "$100",
  picture:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de8051ab-d567-400f-aea1-52fa58ecc910/jordan-stay-loyal-shoes-D7Twcl.png'
},
{
  id: "6bf47533-8f67-4614-b0e2-4c5b8ccce1bc",
  title: "Air Jordan 1 Mid ",
  price: "$110",
  picture:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6bf47533-8f67-4614-b0e2-4c5b8ccce1bc/air-jordan-1-mid-shoes-cQ5Jpt.png'
},
{
  id: "1e7dbcfe-c957-46cd-8845-13925dac38ff",
  title: "Air Force 1'07 LX",
  price: "$120",
  picture:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e7dbcfe-c957-46cd-8845-13925dac38ff/air-force-1-07-lx-shoes.png'
},
];

const renderItem = ({ item }) => (
  <View style={styles.nikeshoes}>
    <TouchableOpacity>
      <View style={styles.nikeshoes}>
    <Image resizeMode='contain' style={{height:300,width:400}} source={{uri:item.picture}}/>
    <Text style={styles.itemstyle}>{item.title}</Text>
    <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default function Nikeshop() {
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