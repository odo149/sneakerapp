import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5, AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const PENDLETON = [
  {
    id: "4F29GT",
    picture: "https://images.vans.com/is/image/Vans/4F29GT-HERO?$330x330$",
  },
  {
    id: "ANd9GcSmKHbkoA5cpgqAe2Odyao8WtomKammWH7qsB_eZnK8EcMQ4Kedx9RA_L3VeiQadoxUQvg",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKHbkoA5cpgqAe2Odyao8WtomKammWH7qsB_eZnK8EcMQ4Kedx9RA_L3VeiQadoxUQvg&usqp=CAU",
  },
  {
    id: "2rShit6R38B_YsaOzc_cmnV93Q",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzXmtnnTOoP6wHXC48zGdZ2Ybf9P7-wHmAjWm7kgx-2rShit6R38B_YsaOzc_cmnV93Q&usqp=CAU",
  },
  {
    id: "ANd9GcQe7bKMWJX3ifGyq25PfuvhjegO7d9Y3Qmc3",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7bKMWJX3ifGyq25PfuvhjegO7d9Y3Qmc3-iPl0ley1pMDGVrpIcmeey6dwFZI73sgOo&usqp=CAU",
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
        <Text style={{fontSize:30,}}>VANS X PENDLETON ANAHEIM FACTORY AUTHENTIC 44 DX</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Women's Shoes</Text>
            <Text style={styles.productdetails}>Sizes: 3-13.5</Text>
            <Text style={styles.productdetails}>2 Colors</Text>
            <Text style={styles.productdetails,{color:'green'}}>Reviews (25)   
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="grey" />
            </Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$95</Text>
          
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