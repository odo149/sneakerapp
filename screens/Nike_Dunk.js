import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const AirJordan = [
  {
    id: "751039f1-6f90-494c-8f95-de2e988dde88",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/751039f1-6f90-494c-8f95-de2e988dde88/dunk-low-big-kids-shoes-lpWtVW.png",
  },
  {
    id: "f9d38414-dbf7-49ad-954a-7472a671d977",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f9d38414-dbf7-49ad-954a-7472a671d977/dunk-low-big-kids-shoes-lpWtVW.png",
  },
  {
    id: "3ae26ccc-a511-4856-83d6-251916287421",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3ae26ccc-a511-4856-83d6-251916287421/dunk-low-big-kids-shoes-lpWtVW.png",
  },
  {
    id: "d878d9f2-50eb-473b-af38-97f0c90fe4e7",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d878d9f2-50eb-473b-af38-97f0c90fe4e7/dunk-low-big-kids-shoes-lpWtVW.png",
  },
  {
    id: "c28aaaab-0690-4740-9eb4-d5a6ad00b876",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c28aaaab-0690-4740-9eb4-d5a6ad00b876/dunk-low-big-kids-shoes-lpWtVW.png",
  },
  {
    id: "2a2cbb34-64ec-46e5-b02c-5300dce7cf9b",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2a2cbb34-64ec-46e5-b02c-5300dce7cf9b/dunk-low-big-kids-shoes-lpWtVW.png",
  },
  {
    id: "450a4f6b-5353-4fa9-bac3-4983fe4b295f",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/450a4f6b-5353-4fa9-bac3-4983fe4b295f/dunk-low-big-kids-shoes-lpWtVW.png",
  },
  {
    id: "3388f4be-f70d-4bf0-bca0-f4fb33acfb8a",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3388f4be-f70d-4bf0-bca0-f4fb33acfb8a/dunk-low-big-kids-shoes-lpWtVW.png",
  },
  
];


export default function Air_Force() {

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
        <Text style={{fontSize:30,}}>Nike Dunk Low</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Kid's Big Shoes</Text>
            <Text style={styles.productdetails}>Available in all sizes</Text>
            <Text style={styles.productdetails}>RELEASE DATE:<Text style={{color:'red'}}> 11/24/21</Text></Text>
            <Text style={styles.productdetails}>1 Color</Text>
            <Text style={styles.productdetails,{color:'#fad264'}}>No Reviews</Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$95</Text>
          
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={AirJordan}
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