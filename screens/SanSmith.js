import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5, AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const SanSmith = [
  {
    id: "68ae7ea7849b43eca70aac1e00f5146d_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
  },
  {
    id: "ac706d8555244a6e8ea7ac1e00f521d1_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ac706d8555244a6e8ea7ac1e00f521d1_9366/Stan_Smith_Shoes_White_FX5502_02_standard_hover.jpg",
  },
  {
    id: "72a38538fd684788b5d9ac1e00f52860_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/72a38538fd684788b5d9ac1e00f52860_9366/Stan_Smith_Shoes_White_FX5502_03_standard.jpg",
  },
  {
    id: "f86168171d2a4644a8eeac1e00f52f85_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f86168171d2a4644a8eeac1e00f52f85_9366/Stan_Smith_Shoes_White_FX5502_04_standard.jpg",
  },
  {
    id: "79e5a7b748c54cbf8c57ac1e00f53669_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/79e5a7b748c54cbf8c57ac1e00f53669_9366/Stan_Smith_Shoes_White_FX5502_05_standard.jpg",
  },
  {
    id: "4bc9628836bf42a181f1ac1e00f51b22_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4bc9628836bf42a181f1ac1e00f51b22_9366/Stan_Smith_Shoes_White_FX5502_06_standard.jpg",
  },
  {
    id: "e111d2c7b44442e0b16cac1e01048b6d_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e111d2c7b44442e0b16cac1e01048b6d_9366/Stan_Smith_Shoes_White_FX5502_09_standard.jpg",
  },
  {
    id: "d5afac8099674bfea559ac1e00f53d7c_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d5afac8099674bfea559ac1e00f53d7c_9366/Stan_Smith_Shoes_White_FX5502_41_detail.jpg",
  },
  {
    id: "e53b9a57b0a745be924bac1e00f54427_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e53b9a57b0a745be924bac1e00f54427_9366/Stan_Smith_Shoes_White_FX5502_42_detail.jpg",
  },
  {
    id: "d382cd9d90114b64a198ad5100fe27cd_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d382cd9d90114b64a198ad5100fe27cd_9366/Disney_Rex_and_the_Aliens_Stan_Smith_White_GZ5991_01_standard.jpg",
  },
  {
    id: "8727f3f2018c4d0f9f97aca100b28db1_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8727f3f2018c4d0f9f97aca100b28db1_9366/HULK_STAN_SMITH_SHOES_Black_FZ2708_01_standard.jpg",
  },
  {
    id: "b8ee3a4474194f9885e0ace001063da6_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b8ee3a4474194f9885e0ace001063da6_9366/Stan_Smith_Shoes_White_GY5460_01_standard.jpg",
  },
  {
    id: "3cc2f5fc679e43cc8f56ad5e00f61580_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3cc2f5fc679e43cc8f56ad5e00f61580_9366/Stan_Smith_Shoes_Grey_H00338_01_standard.jpg",
  },
  {
    id: "08fc0ad2aef34cce8ac7ac3200a278a6_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/08fc0ad2aef34cce8ac7ac3200a278a6_9366/Stan_Smith_Shoes_Black_FX5499_01_standard.jpg",
  },
  
];


export default function sansmith() {

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
        <Text style={{fontSize:30,}}>San Smith Shoes</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Unisex Shoes</Text>
            <Text style={styles.productdetails}>Sizes: 5-14</Text>
            <Text style={styles.productdetails}>31 Colors: Core Black/Cloud White/Core Black</Text>
            <Text style={styles.productdetails,{color:'green'}}>Reviews (11845)   
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            </Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$85</Text>
          
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={SanSmith}
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