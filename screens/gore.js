import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5, AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const gore = [
  {
    id: "41d85484a48a4f048ea4ad5600b330d0_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/41d85484a48a4f048ea4ad5600b330d0_9366/ZX_2K_Boost_Utility_GORE-TEX_Shoes_Beige_H05319_01_standard.jpg",
  },
  {
    id: "f228ebc4e7ff4830bb38ad5600b33ea1_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f228ebc4e7ff4830bb38ad5600b33ea1_9366/ZX_2K_Boost_Utility_GORE-TEX_Shoes_Beige_H05319_02_standard_hover.jpg",
  },
  {
    id: "1c0d55607d4d45f8bac3ad5600b34592_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1c0d55607d4d45f8bac3ad5600b34592_9366/ZX_2K_Boost_Utility_GORE-TEX_Shoes_Beige_H05319_03_standard.jpg",
  },
  {
    id: "dc5179a810664961a72aad5600b34c0d_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/dc5179a810664961a72aad5600b34c0d_9366/ZX_2K_Boost_Utility_GORE-TEX_Shoes_Beige_H05319_04_standard.jpg",
  },
  {
    id: "ef8b2716bdcd4b5aa0a3ad5600b353b6_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ef8b2716bdcd4b5aa0a3ad5600b353b6_9366/ZX_2K_Boost_Utility_GORE-TEX_Shoes_Beige_H05319_05_standard.jpg",
  },
  {
    id: "98223f5e651c4d999435ad5600b3375e_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/98223f5e651c4d999435ad5600b3375e_9366/ZX_2K_Boost_Utility_GORE-TEX_Shoes_Beige_H05319_06_standard.jpg",
  },
  {
    id: "14cc4d8385bd4e489ef6ad5600b36c48_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/14cc4d8385bd4e489ef6ad5600b36c48_9366/ZX_2K_Boost_Utility_GORE-TEX_Shoes_Beige_H05319_09_standard.jpg",
  },
  {
    id: "95e5e677fcc64b67a74dad5600b35b9c_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/95e5e677fcc64b67a74dad5600b35b9c_9366/ZX_2K_Boost_Utility_GORE-TEX_Shoes_Beige_H05319_41_detail.jpg",
  },
  {
    id: "480afc4f1d7f46078555ad5600b36233_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/480afc4f1d7f46078555ad5600b36233_9366/ZX_2K_Boost_Utility_GORE-TEX_Shoes_Beige_H05319_42_detail.jpg",
  },
  
];


export default function Gore() {

  const renderItem = ({ item }) => (

    <View>
      <Image 
      resizeMode='cover' 
      style={{height: 350,
              width:450,
              borderRadius:50,
              margin:20}} 
      source={{uri:item.picture}} />
    </View>

  );
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize:30,}}>ZX 2K BOOST UTILITY GORE-TEX SHOES</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Men's Shoes</Text>
            <Text style={styles.productdetails}>Sizes: 5-12</Text>
            <Text style={styles.productdetails}>1 Color</Text>
            <Text style={styles.productdetails,{color:'green'}}>Reviews (55)   
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            </Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$126</Text>
          
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={gore}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <View style={{alignItems:'center',padding:20}}>
        <Text style={{fontSize:20}}><FontAwesome5 name="angle-double-left" size={24} color="black" />     Scroll to view more     <FontAwesome5 name="angle-double-right" size={24} color="black" /></Text>
      </View>

      <TouchableOpacity>
        <View style={{
          alignItems:'center',
          paddingHorizontal:100,
          backgroundColor:'orange',
          padding:20,
          borderRadius:30}}>
          <Text style={{fontSize:20,color:'white'}}>Add to Cart <Zocial name="cart" size={24} color="white" /></Text>

        </View>
      </TouchableOpacity>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
    justifyContent: 'center',
    padding:5
  },
  productdetails: {
    fontSize:15,
    color: 'grey'
  }
});