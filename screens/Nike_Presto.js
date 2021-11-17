import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const NikePresto = [
  {
    id: "a04da4ac-13b8-47dd-adda-d2fecdf82baf",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a04da4ac-13b8-47dd-adda-d2fecdf82baf/air-presto-id-shoe.png",
  },
  {
    id: "60709b55-8429-41ec-866d-ec7acc424109",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/60709b55-8429-41ec-866d-ec7acc424109/air-presto-id-shoe.png",
  },
  {
    id: "49db6935-913b-4751-8748-efdb30496fe8",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/49db6935-913b-4751-8748-efdb30496fe8/air-presto-id-shoe.png",
  },
  {
    id: "cd2dba3a-4048-4e48-a1a7-7e4297b6c151",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cd2dba3a-4048-4e48-a1a7-7e4297b6c151/air-presto-id-shoe.png",
  },
  {
    id: "7459e5a9-bafd-4b49-8f85-aaee21965927",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7459e5a9-bafd-4b49-8f85-aaee21965927/air-presto-id-shoe.png",
  },
  {
    id: "9be5bd5b-4f8e-4a22-a86f-29443adc6752",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9be5bd5b-4f8e-4a22-a86f-29443adc6752/air-presto-id-shoe.png",
  },
  {
    id: "841f6a18-91e6-46cb-9a0a-6bce860e4761",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/841f6a18-91e6-46cb-9a0a-6bce860e4761/air-presto-id-shoe.png",
  },
  {
    id: "dd2e0254-87d9-44cd-828b-21f9c2969217",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd2e0254-87d9-44cd-828b-21f9c2969217/air-presto-id-shoe.png",
  },
  {
    id: "955d57d8-d9a6-4482-9f35-9d044276404c",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/955d57d8-d9a6-4482-9f35-9d044276404c/air-presto-id-shoe.png",
  },
  {
    id: "1559e6f8-20ee-495b-a282-a580d792e461",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1559e6f8-20ee-495b-a282-a580d792e461/air-presto-id-shoe.png",
  },
  {
    id: "0f955459-6d7f-4c87-8e17-cf0b7ec4f006",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0f955459-6d7f-4c87-8e17-cf0b7ec4f006/air-presto-id-shoe.png",
  },
  {
    id: "f5b01709-8ef8-43f0-b044-22ba8380587d",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f5b01709-8ef8-43f0-b044-22ba8380587d/air-presto-id-shoe.png",
  },
  {
    id: "275fa922-eb6a-40d1-b637-f332378e3cbb",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/275fa922-eb6a-40d1-b637-f332378e3cbb/air-presto-id-shoe.png",
  },
  {
    id: "380a9c69-ae03-4d21-8356-6ed219883c06",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/380a9c69-ae03-4d21-8356-6ed219883c06/air-presto-id-shoe.png",
  },
  {
    id: "9de94d34-6dff-416d-ae0c-688804c0dffb",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9de94d34-6dff-416d-ae0c-688804c0dffb/air-presto-id-shoe.png",
  },
  {
    id: "f709d726-6387-47a6-89a9-3318fa188f8d",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f709d726-6387-47a6-89a9-3318fa188f8d/air-presto-id-shoe.png",
  },
  {
    id: "7b5a7649-e450-47b2-ab50-d01be9bf121e",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7b5a7649-e450-47b2-ab50-d01be9bf121e/air-presto-id-shoe.png",
  },
  {
    id: "cdb19bec-f2d8-42ab-995e-81b58f8c71c0",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cdb19bec-f2d8-42ab-995e-81b58f8c71c0/air-presto-id-shoe.png",
  },
  
  {
    id: "94c79d4a-a230-47d3-b1bd-2fa21a4225d0",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/94c79d4a-a230-47d3-b1bd-2fa21a4225d0/air-presto-id-shoe.png",
  },
  {
    id: "b8ccb94e-60e4-4c65-9bc5-6f07272164d4",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b8ccb94e-60e4-4c65-9bc5-6f07272164d4/air-presto-id-shoe.png",
  },
  {
    id: "796d036d-e57e-443a-b4f1-22c774f83798",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/796d036d-e57e-443a-b4f1-22c774f83798/air-presto-id-shoe.png",
  },
  {
    id: "66f6a373-b5bb-460f-b526-7f454efbfa2d",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/66f6a373-b5bb-460f-b526-7f454efbfa2d/air-presto-id-shoe.png",
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
        <Text style={{fontSize:30,}}>Nike Air Presto</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Unisex Shoes</Text>
            <Text style={styles.productdetails}>Sizes: 6-14</Text>
            <Text style={styles.productdetails}>6 Colors</Text>
            <Text style={styles.productdetails,{color:'#fad264'}}>No Reviews</Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$150</Text>
          
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={NikePresto}
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