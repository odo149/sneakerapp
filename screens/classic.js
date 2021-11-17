import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5, AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const PENDLETON = [
  {
    id: "4F29GT",
    picture: "https://images.vans.com/is/image/Vans/U3CZPN-HERO?$330x330$",
  },
  {
    id: "1_636073_ZM_ALT4",
    picture: "https://images.journeys.com/images/products/1_636073_ZM_ALT4.JPG",
  },
  {
    id: "VN0A5JI3Y28",
    picture: "https://cdn.shopify.com/s/files/1/0187/5180/products/ONENESS_0014_VANS-SK8-HI-TERROR-X-THE-SHINING-YELLOW-VN0A4U3CZPN_5949940d-224d-4b18-8d90-7916b9ea6974_5000x.jpg?v=1633104480",
  },
  {
    id: "1603902276",
    picture: "https://www.impericon.com/432x624x90/media/catalog/product/h/o/ho21_lifestyle_vansxhorror_uask8-hi_terrortheshiningblack_vn0a4u3czpn_pair.jpg",
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
        <Text style={{fontSize:30,}}>VANS X THE SHINING CLASSIC SK8-HI</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Men's Shoes</Text>
            <Text style={styles.productdetails}>Sizes: 3-13.5</Text>
            <Text style={styles.productdetails}>2 Colors</Text>
            <Text style={styles.productdetails,{color:'green'}}>Reviews (90)   
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            </Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$75</Text>
          
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