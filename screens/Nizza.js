import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5, AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const Ozelia = [
  {
    id: "de91f7b7f92e400c872eab7601227aea_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/de91f7b7f92e400c872eab7601227aea_9366/Nizza_Trefoil_Shoes_Black_FW5185_01_standard.jpg",
  },
  {
    id: "73732399dbd1444d87e9ab82010cd7ff_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/73732399dbd1444d87e9ab82010cd7ff_9366/Nizza_Trefoil_Shoes_Black_FW5185_010_hover_standard.jpg",
  },
  {
    id: "b64672990d24429ab3b4ab7601229c0d_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b64672990d24429ab3b4ab7601229c0d_9366/Nizza_Trefoil_Shoes_Black_FW5185_02_standard.jpg",
  },
  {
    id: "2e70d04d5d794db7842cab760121df0f_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2e70d04d5d794db7842cab760121df0f_9366/Nizza_Trefoil_Shoes_Black_FW5185_03_standard.jpg",
  },
  {
    id: "70af0327f4624987bd84ab7601236032_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/70af0327f4624987bd84ab7601236032_9366/Nizza_Trefoil_Shoes_Black_FW5185_04_standard.jpg",
  },
  {
    id: "552c9f5309b74b8da5e6ab760122001d_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/552c9f5309b74b8da5e6ab760122001d_9366/Nizza_Trefoil_Shoes_Black_FW5185_05_standard.jpg",
  },
  {
    id: "41ca86d66927404b8f20ab7601225e4a_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/41ca86d66927404b8f20ab7601225e4a_9366/Nizza_Trefoil_Shoes_Black_FW5185_06_standard.jpg",
  },
  {
    id: "e602973727454cd8a55cad2101529243_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e602973727454cd8a55cad2101529243_9366/Nizza_Trefoil_Shoes_Black_FW5185_09_standard.jpg",
  },
  {
    id: "c85bde85d4f5477d888bab760122bb49_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c85bde85d4f5477d888bab760122bb49_9366/Nizza_Trefoil_Shoes_Black_FW5185_41_detail.jpg",
  },
  {
    id: "efc46a8c37b740aa80deab760123095f_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/efc46a8c37b740aa80deab760123095f_9366/Nizza_Trefoil_Shoes_Black_FW5185_42_detail.jpg",
  },
  {
    id: "a29a468a5c6342e78587ab7601221b16_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a29a468a5c6342e78587ab7601221b16_9366/Nizza_Trefoil_Shoes_Black_FW5185_43_detail.jpg",
  },
  {
    id: "5fc0cd55733d4a2991f5ab76011ffba0_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5fc0cd55733d4a2991f5ab76011ffba0_9366/Nizza_Trefoil_Shoes_White_FW5184_01_standard.jpg",
  },
  {
    id: "fcff8c7a43b24e96bbd9ab82010d8d61_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fcff8c7a43b24e96bbd9ab82010d8d61_9366/Nizza_Trefoil_Shoes_White_FW5184_010_hover_standard.jpg",
  },
  {
    id: "4ad0e694afae4f529dd9ad2101537aea_9366",
    picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4ad0e694afae4f529dd9ad2101537aea_9366/Nizza_Trefoil_Shoes_White_FW5184_09_standard.jpg",
  },
  
];


export default function Nizza() {

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
        <Text style={{fontSize:30,}}>Nezza Trefoil Shoes</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Unisex Shoes</Text>
            <Text style={styles.productdetails}>Sizes: 4-15</Text>
            <Text style={styles.productdetails}>2 Colors: Core Black/Cloud White/Core Black</Text>
            <Text style={styles.productdetails,{color:'green'}}>Reviews (175)   
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="black" />
            </Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$75</Text>
          
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