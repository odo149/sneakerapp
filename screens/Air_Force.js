import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const AirForce = [
  {
    id: "af97ba88-c8ac-487a-bee9-56049185ab02",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/af97ba88-c8ac-487a-bee9-56049185ab02/air-force-1-07-lx-mens-shoes-fmG5v7.png",
  },
  {
    id: "b4ff9dd4-9a9a-40f1-bf34-48c161763ef6",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b4ff9dd4-9a9a-40f1-bf34-48c161763ef6/air-force-1-07-lx-mens-shoes-fmG5v7.png",
  },
  {
    id: "b14b95cf-f6e1-444a-a844-a9ced885cd79",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b14b95cf-f6e1-444a-a844-a9ced885cd79/air-force-1-07-lx-mens-shoes-fmG5v7.png",
  },
  {
    id: "38e80459-9679-42d6-9427-9257fb545562",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/38e80459-9679-42d6-9427-9257fb545562/air-force-1-07-lx-mens-shoes-fmG5v7.png",
  },
  {
    id: "3fa5c033-2f5b-4e74-9f0c-40da00f93a2c",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3fa5c033-2f5b-4e74-9f0c-40da00f93a2c/air-force-1-07-lx-mens-shoes-fmG5v7.png",
  },
  {
    id: "06116f16-e377-4363-9c62-cfb2cb0f2a60",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/06116f16-e377-4363-9c62-cfb2cb0f2a60/air-force-1-07-lx-mens-shoes-fmG5v7.png",
  },
  {
    id: "9121a121-2617-4493-a11b-c1165a67f596",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9121a121-2617-4493-a11b-c1165a67f596/air-force-1-07-lx-mens-shoes-fmG5v7.png",
  },
  {
    id: "84a9cecd-20e6-4b3b-b5db-2841a16fb17f",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/84a9cecd-20e6-4b3b-b5db-2841a16fb17f/air-force-1-07-lx-mens-shoes-fmG5v7.png",
  },
  {
    id: "217cc4fd-fcd8-4040-98c0-b6e1ba669577",
    picture: "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/217cc4fd-fcd8-4040-98c0-b6e1ba669577/image.jpg",
  },
  {
    id: "7a1a3035-a2b7-4f62-9105-143a4c4a0a31",
    picture: "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/7a1a3035-a2b7-4f62-9105-143a4c4a0a31/image.jpg",
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
        <Text style={{fontSize:30,}}>Nike Air Force 1 '07 LX</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Men's Shoes</Text>
            <Text style={styles.productdetails}>Available in all sizes</Text>
            <Text style={styles.productdetails}>RELEASE DATE:<Text style={{color:'red'}}> 11/20/21</Text></Text>
            <Text style={styles.productdetails}>1 Color</Text>
            <Text style={styles.productdetails,{color:'#fad264'}}>No Reviews</Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$120</Text>
          
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={AirForce}
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