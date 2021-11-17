import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5, AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const JordanStayLoyal = [
  {
    id: "csnnsvmzomr1gu7qfcnd",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/csnnsvmzomr1gu7qfcnd/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "l0ygc6xwmb5esfiln14k",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/l0ygc6xwmb5esfiln14k/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "xc4lhjjrnaloawtlpwhf",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xc4lhjjrnaloawtlpwhf/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "e8mdvzifyghkojpgpuyp",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e8mdvzifyghkojpgpuyp/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "ycbz7unfspsufwegt3e7",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ycbz7unfspsufwegt3e7/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "k8lilkbvc7ahppv9jlci",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/k8lilkbvc7ahppv9jlci/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "a9b6eb77-7325-4df3-bd4c-7ed018b49d0c",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a9b6eb77-7325-4df3-bd4c-7ed018b49d0c/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "bd579a20-4f2a-4ae9-9f51-a00df457adb8",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bd579a20-4f2a-4ae9-9f51-a00df457adb8/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "807c958c-aa3d-448e-b4d7-1bdd8203caf4",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/807c958c-aa3d-448e-b4d7-1bdd8203caf4/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "8cac85ac-1290-4d9f-bebb-1316a8de5e59",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8cac85ac-1290-4d9f-bebb-1316a8de5e59/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "fa9aefad-5a31-45a2-87e7-4315a13ad1ad",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fa9aefad-5a31-45a2-87e7-4315a13ad1ad/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "0b10c762-91bf-4440-adcc-f51c9660f47a",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0b10c762-91bf-4440-adcc-f51c9660f47a/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "176627eb-f07c-4465-ad8f-d87b41ad0fb6",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/176627eb-f07c-4465-ad8f-d87b41ad0fb6/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "d5b56ded-1657-4ad3-bd31-1caa9f98c308",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d5b56ded-1657-4ad3-bd31-1caa9f98c308/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "pyyixbczj6u5kiwhpjik",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/pyyixbczj6u5kiwhpjik/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "kwbianpnd3r0enjw7xq8",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/kwbianpnd3r0enjw7xq8/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "4cc89daa-c394-4ad4-9214-262f9b1a065a",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4cc89daa-c394-4ad4-9214-262f9b1a065a/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "g8vd0obziukibvfpbm0t",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/g8vd0obziukibvfpbm0t/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "cb1951e7-0600-4f7a-9b26-12be8cd2bd01",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cb1951e7-0600-4f7a-9b26-12be8cd2bd01/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "689d9244-f280-4e6e-a866-f068c34050d8",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/689d9244-f280-4e6e-a866-f068c34050d8/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "kybzbkolrlshxvlcw9p7",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/kybzbkolrlshxvlcw9p7/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "qbj62cpyah7powc2isrl",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/qbj62cpyah7powc2isrl/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "azxuro2ohgadiu3wpjpo",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/azxuro2ohgadiu3wpjpo/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "91d65733-261e-4ef0-a0bb-31e4900fdf66",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/91d65733-261e-4ef0-a0bb-31e4900fdf66/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "99194fb6-66d9-430f-b3c3-18296323ed4a",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/99194fb6-66d9-430f-b3c3-18296323ed4a/air-max-270-womens-shoes-Pgb94t.png",
  },
  {
    id: "ed72b59b-4478-41c9-bfbe-a40d428c6981",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ed72b59b-4478-41c9-bfbe-a40d428c6981/air-max-270-womens-shoes-Pgb94t.png",
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
        <Text style={{fontSize:30,}}>Air Max 270</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Women's Shoes</Text>
            <Text style={styles.productdetails}>Sizes: 5-12</Text>
            <Text style={styles.productdetails}>9 Colors</Text>
            <Text style={styles.productdetails,{color:'green'}}>Reviews (4)  <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            </Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$150</Text>
          
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={JordanStayLoyal}
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