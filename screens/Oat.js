import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5, AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const gore = [
  {
    id: "17414811_36396248_1000",
    picture: "https://cdn-images.farfetch-contents.com/17/41/48/11/17414811_36396248_1000.jpg",
  },
  {
    id: "17414811_36394913_1000",
    picture: "https://cdn-images.farfetch-contents.com/17/41/48/11/17414811_36394913_1000.jpg",
  },
  {
    id: "17414811_36396251_1000",
    picture: "https://cdn-images.farfetch-contents.com/17/41/48/11/17414811_36396251_1000.jpg",
  },
  {
    id: "17414811_36396249_1000",
    picture: "https://cdn-images.farfetch-contents.com/17/41/48/11/17414811_36396249_1000.jpg",
  },
  
];


export default function oat() {

  const renderItem = ({ item }) => (

    <View>
      <Image 
      resizeMode='contain' 
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
        <Text style={{fontSize:30,}}>YEEZY Boost 350 V2 "MX Oat" sneakers</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Men's Shoes</Text>
            <Text style={styles.productdetails}>Sizes: 5-12</Text>
            <Text style={styles.productdetails}>1 Color</Text>
            <Text style={styles.productdetails,{color:'green'}}>Reviews (2M)   
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            </Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$321</Text>
          
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