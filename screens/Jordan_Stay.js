import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5, AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text,Image, FlatList,View, TouchableOpacity } from 'react-native';

const JordanStayLoyal = [
  {
    id: "5f665e9b-5b4e-4e74-8fe9-51b5320835ae",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5f665e9b-5b4e-4e74-8fe9-51b5320835ae/jordan-stay-loyal-shoes-tdsMgH.png",
  },
  {
    id: "1ec00401-b73d-45b0-bfcf-907cb53e59c9",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1ec00401-b73d-45b0-bfcf-907cb53e59c9/jordan-stay-loyal-shoes-tdsMgH.png",
  },
  {
    id: "875e73b7-37f0-4883-9366-ae392c857355",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/875e73b7-37f0-4883-9366-ae392c857355/jordan-stay-loyal-shoes-tdsMgH.png",
  },
  {
    id: "e7bbd4eb-d923-415c-a46f-e45c86dbe324",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e7bbd4eb-d923-415c-a46f-e45c86dbe324/jordan-stay-loyal-shoes-tdsMgH.png",
  },
  {
    id: "023e6aa6-c54f-4d4e-a893-08859b3f9214",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/023e6aa6-c54f-4d4e-a893-08859b3f9214/jordan-stay-loyal-shoes-tdsMgH.png",
  },
  {
    id: "177aee89-33c3-44b0-98fa-e8da6ddec7d4",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/177aee89-33c3-44b0-98fa-e8da6ddec7d4/jordan-stay-loyal-shoes-tdsMgH.png",
  },
  {
    id: "1095b403-b4b1-447e-8640-a4079df390d4",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1095b403-b4b1-447e-8640-a4079df390d4/jordan-stay-loyal-shoes-tdsMgH.png",
  },
  {
    id: "f7fdcfca-1e3b-4828-a615-de2bd7b93477",
    picture: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f7fdcfca-1e3b-4828-a615-de2bd7b93477/jordan-stay-loyal-shoes-tdsMgH.png",
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
        <Text style={{fontSize:30,}}>Jordan Stay Loyal</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={styles.productdetails}>Men's Shoes</Text>
            <Text style={styles.productdetails}>Available in all sizes</Text>
            <Text style={styles.productdetails}>1 Color</Text>
            <Text style={styles.productdetails,{color:'green'}}>Reviews (4)   
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="#fac064" />
            <AntDesign name="star" size={15} color="black" />
            </Text>
          </View>
         
          <Text style={{fontSize:25,color:'#fa9d64'}}>$110</Text>
          
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