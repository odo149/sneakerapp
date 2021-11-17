import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5, AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const YEEZY = [
  {
    id: "14527715_22320364_1000",
    picture: "https://cdn-images.farfetch-contents.com/14/52/77/15/14527715_22320364_1000.jpg",
  },
  {
    id: "14527715_22320375_1000",
    picture: "https://cdn-images.farfetch-contents.com/14/52/77/15/14527715_22320375_1000.jpg",
  },
  {
    id: "14527715_22320385_1000",
    picture: "https://cdn-images.farfetch-contents.com/14/52/77/15/14527715_22320385_1000.jpg",
  },
  {
    id: "14527715_22320395_1000",
    picture: "https://cdn-images.farfetch-contents.com/14/52/77/15/14527715_22320395_1000.jpg",
  },
  
];


export default function yeezy700() {

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
        <Text style={{fontSize:30,}}>Yeezy Boost 700 V2 "Inertia" sneakers</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Men's Shoes</Text>
            <Text style={styles.productdetails}>Sizes: 3-13.5</Text>
            <Text style={styles.productdetails}>1 Color</Text>
            <Text style={styles.productdetails,{color:'green'}}>Reviews (1M)   
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            </Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$602</Text>
          
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={YEEZY}
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