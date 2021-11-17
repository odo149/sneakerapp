import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5, AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const Ozelia = [
  {
    id: "d50e8022543e46b28c85ad2600b44567_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d50e8022543e46b28c85ad2600b44567_9366/Ozelia_Shoes_Grey_H04252_01_standard.jpg",
  },
  {
    id: "1ff728b52af3491c8d4dad2600b46cbd_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1ff728b52af3491c8d4dad2600b46cbd_9366/Ozelia_Shoes_Grey_H04252_012_hover_standard.jpg",
  },
  {
    id: "8cfc2ace8e444ca1948fad2600b4534f_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8cfc2ace8e444ca1948fad2600b4534f_9366/Ozelia_Shoes_Grey_H04252_02_standard.jpg",
  },
  {
    id: "92678b3b179b49c69677ad2600b45a1d_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/92678b3b179b49c69677ad2600b45a1d_9366/Ozelia_Shoes_Grey_H04252_03_standard.jpg",
  },
  {
    id: "b455f485ba174eb0a28ead2600b46082_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b455f485ba174eb0a28ead2600b46082_9366/Ozelia_Shoes_Grey_H04252_04_standard.jpg",
  },
  {
    id: "2b404df886b94b88b8abad2600b4723e_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2b404df886b94b88b8abad2600b4723e_9366/Ozelia_Shoes_Grey_H04252_41_detail.jpg",
  },
  {
    id: "ed767a45f8f84338bdc1ad2600b4785d_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ed767a45f8f84338bdc1ad2600b4785d_9366/Ozelia_Shoes_Grey_H04252_42_detail.jpg",
  },
  {
    id: "6127a107213240abb411ad1d00ecdaae_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6127a107213240abb411ad1d00ecdaae_9366/Ozelia_Shoes_Black_G54894_01_standard.jpg",
  },
  {
    id: "a27f5b4b0d524cc2b540ad2f00d3be5f_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a27f5b4b0d524cc2b540ad2f00d3be5f_9366/Ozelia_Shoes_Beige_GV7685_01_standard.jpg",
  },
  {
    id: "a5780369a888494fa3c7ad51010dc255_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a5780369a888494fa3c7ad51010dc255_9366/Ozelia_Shoes_Green_GX3631_01_standard.jpg",
  },
  {
    id: "429760d34fd44920952fad2b00cd494b_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/429760d34fd44920952fad2b00cd494b_9366/Ozelia_Shoes_Black_GX3667_01_standard.jpg",
  },
  {
    id: "4d37ba61024641a59bbaad5500f668fe_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4d37ba61024641a59bbaad5500f668fe_9366/Ozelia_Shoes_White_GZ9176_01_standard.jpg",
  },
  {
    id: "c58cdd0f2f7348bc99b7ad1f014f833b_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c58cdd0f2f7348bc99b7ad1f014f833b_9366/Ozelia_Shoes_White_H04248_01_standard.jpg",
  },
  {
    id: "794550f15e58494c80eaad82013e515c_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/794550f15e58494c80eaad82013e515c_9366/Ozelia_Shoes_Black_H04249_01_standard.jpg",
  },
  {
    id: "c2d47865bc8143acb3c0ad2401570a53_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c2d47865bc8143acb3c0ad2401570a53_9366/Ozelia_Shoes_Black_H04250_01_standard.jpg",
  },
  {
    id: "c789549c7aa046d29c22ad2f00dc7e2d_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c789549c7aa046d29c22ad2f00dc7e2d_9366/Ozelia_Shoes_White_H04251_01_standard.jpg",
  },
  {
    id: "fa880e1b74a947af8f14ad6000edc7f3_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fa880e1b74a947af8f14ad6000edc7f3_9366/Ozelia_Shoes_Grey_H04253_01_standard.jpg",
  },
];


export default function ozelia() {

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
        <Text style={{fontSize:30,}}>Ozelia</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Men's Shoes</Text>
            <Text style={styles.productdetails}>Sizes: 4-12</Text>
            <Text style={styles.productdetails}>11 Colors</Text>
            <Text style={styles.productdetails,{color:'green'}}>Reviews (440)   
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            </Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$100</Text>
          
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={Ozelia}
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