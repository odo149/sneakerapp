import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const PENDLETON = [
  {
    id: "4F29GT",
    picture: "https://images.vans.com/is/image/Vans/JMCOS7-HERO?$330x330$",
  },
  {
    id: "8aec661a8ca48d672fd249e0f2480ece",
    picture: "https://vans.ru/upload/resize_cache/iblock/f3e/700_700_0/f3e5b24dcefa760c8bfbe0884439257f.jpg",
  },
  {
    id: "VN0A5JI3Y28",
    picture: "https://vans.ru/upload/resize_cache/iblock/b5c/700_700_0/b5c8f9f8f415e6aad56b8fff77b70ef3.jpg",
  },
  {
    id: "1603902276",
    picture: "https://vans.ru/upload/resize_cache/iblock/098/700_700_0/09812fe55ae1b07ab637f79d5e423485.jpg",
  },
  
];


export default function pendleton() {

  const renderItem = ({ item }) => (

    <View>
      <Image 
      resizeMode='cover' 
      style={{height: 300,
              width:450,
              borderRadius:50,
              margin:20}} 
      source={{uri:item.picture}} />
    </View>

  );
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize:30,}}>STAPLE COAST CC</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Unisex Shoes</Text>
            <Text style={styles.productdetails}>Sizes: 3-13.5</Text>
            <Text style={styles.productdetails}>1 Colors</Text>
            <Text style={styles.productdetails,{color:'orange'}}>No Reviews</Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$110</Text>
          
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={PENDLETON}
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