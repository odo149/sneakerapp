import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5, AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const CHUCK = [
  {
    id: "162058C_A_107X1",
    picture: "https://secure-render.nike.com/ir/render/nikeidrender/CT70CanvasHiHO21_v3?obj=/s/g1/body&color=915D38&show&obj=/s/g2/tong&color=915D38&show&obj=/s/g3/heel&color=915D38&show&obj=/s/g7&color=F9F1DF&show&obj=/s/g9&color=F9F1DF&show&obj=/s/g10&color=c5c2c1&show&obj=/s/g12&color=F9F1DF&show&obj=/s/g13&color=151416&show&obj=/s/g14&color=151416&show&obj=/s/g15/rubber&color=F9F1DF&show&obj=/s/g17&color=F9F1DF&show&obj=/s/g21&color=151416&show&obj=/s/g8&color=F9F1DF&show&obj=/s/g11/00-0484&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406",
  },
  {
    id: "8aec661a8ca48d672fd249e0f2480ece",
    picture: "https://secure-render.nike.com/ir/render/nikeidrender/CT70CanvasHiHO21_v6?obj=/s/g1/body&color=915D38&show&obj=/s/g2/tong&color=915D38&show&obj=/s/g3/heel&color=915D38&show&obj=/s/g7&color=F9F1DF&show&obj=/s/g9&color=F9F1DF&show&obj=/s/g10&color=c5c2c1&show&obj=/s/g12&color=F9F1DF&show&obj=/s/g13&color=151416&show&obj=/s/g14&color=151416&show&obj=/s/g15/rubber&color=F9F1DF&show&obj=/s/g17&color=F9F1DF&show&obj=/s/g21&color=151416&show&obj=/s/g8&color=F9F1DF&show&obj=/s/g11/00-0484&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406",
  },
  {
    id: "VN0A5JI3Y28",
    picture: "https://secure-render.nike.com/ir/render/nikeidrender/CT70CanvasHiHO21_v4?obj=/s/g1/body&color=915D38&show&obj=/s/g2/tong&color=915D38&show&obj=/s/g3/heel&color=915D38&show&obj=/s/g7&color=F9F1DF&show&obj=/s/g9&color=F9F1DF&show&obj=/s/g10&color=c5c2c1&show&obj=/s/g12&color=F9F1DF&show&obj=/s/g13&color=151416&show&obj=/s/g14&color=151416&show&obj=/s/g15/rubber&color=F9F1DF&show&obj=/s/g17&color=F9F1DF&show&obj=/s/g21&color=151416&show&obj=/s/g8&color=F9F1DF&show&obj=/s/g11/00-0484&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406",
  },
  {
    id: "1603902276",
    picture: "https://secure-render.nike.com/ir/render/nikeidrender/CT70CanvasHiHO21_v5?obj=/s/g1/body&color=915D38&show&obj=/s/g2/tong&color=915D38&show&obj=/s/g3/heel&color=915D38&show&obj=/s/g7&color=F9F1DF&show&obj=/s/g9&color=F9F1DF&show&obj=/s/g10&color=c5c2c1&show&obj=/s/g12&color=F9F1DF&show&obj=/s/g13&color=151416&show&obj=/s/g14&color=151416&show&obj=/s/g15/rubber&color=F9F1DF&show&obj=/s/g17&color=F9F1DF&show&obj=/s/g21&color=151416&show&obj=/s/g8&color=F9F1DF&show&obj=/s/g11/00-0484&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406",
  },
  {
    id: "D-Converse-PDP-4-1-Custom-Chuck-70-SU21",
    picture: "https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dwcb1b9ef3/firstspirit/media/07_product_detail_pages/2021_summer_6/custom_3/chuck_7/D-Converse-PDP-4-1-Custom-Chuck-70-SU21-.jpg",
  },
  
];


export default function pendleton() {

  const renderItem = ({ item }) => (

    <View>
      <Image 
      resizeMode='contain' 
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
        <Text style={{fontSize:30,}}>CHUCK 70</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Unisex Shoes</Text>
            <Text style={styles.productdetails}>Sizes: 3-13.5</Text>
            <Text style={styles.productdetails}>1 Colors</Text>
            <Text style={styles.productdetails,{color:'green'}}>Reviews (90)   
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="grey" />
            </Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$85</Text>
          
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={CHUCK}
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