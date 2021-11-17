import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const AirJordan = [
  {
    id: "f0f7064e-51ab-4350-ac80-efcdb64ac786",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f0f7064e-51ab-4350-ac80-efcdb64ac786/air-jordan-1-low-shoes-z3Tl2VeJ.png",
  },
  {
    id: "197cbaa9-5815-4985-9081-95890d95458e",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-shoes-z3Tl2VeJ.png",
  },
  {
    id: "74195b1e-525e-4c7c-8fa4-651a66445239",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-shoes-z3Tl2VeJ.png",
  },
  {
    id: "c20f4a46-0ef8-48d9-945c-cbca35046bee",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c20f4a46-0ef8-48d9-945c-cbca35046bee/air-jordan-1-low-shoes-z3Tl2VeJ.png",
  },
  {
    id: "b1063942-c269-4b3c-9eec-43ec426bf75e",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b1063942-c269-4b3c-9eec-43ec426bf75e/air-jordan-1-low-shoes-z3Tl2VeJ.png",
  },
  {
    id: "84ba8adc-d2f4-4f70-9031-162b5acdeac1",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/84ba8adc-d2f4-4f70-9031-162b5acdeac1/air-jordan-1-low-shoes-z3Tl2VeJ.png",
  },
  {
    id: "16d3fe2f-1d15-42e8-a901-7d5e94ea606b",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/16d3fe2f-1d15-42e8-a901-7d5e94ea606b/air-jordan-1-low-shoes-z3Tl2VeJ.png",
  },
  {
    id: "68f85845-e3e2-477c-bcfa-f6421c50c3f8",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/68f85845-e3e2-477c-bcfa-f6421c50c3f8/air-jordan-1-low-shoes-z3Tl2VeJ.png",
  },
  {
    id: "c13d1043-18b0-4dc4-90ff-f343d130fe81",
    picture: "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/c13d1043-18b0-4dc4-90ff-f343d130fe81/image.jpg",
  },
  {
    id: "f765eaec-c9f4-4485-a2a4-18b3645f8335",
    picture: "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/f765eaec-c9f4-4485-a2a4-18b3645f8335/image.jpg",
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
        <Text style={{fontSize:30,}}>Air Jordan 1 Low</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Men's Shoes</Text>
            <Text style={styles.productdetails}>Available in all sizes</Text>
            <Text style={styles.productdetails}>RELEASE DATE:<Text style={{color:'red'}}> 11/19/21</Text></Text>
            <Text style={styles.productdetails}>1 Color</Text>
            <Text style={styles.productdetails,{color:'#fad264'}}>No Reviews</Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$100</Text>
          
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