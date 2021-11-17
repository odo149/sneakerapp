import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image,TouchableOpacity,Text, View } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{padding: 20}}>
        <Text style={{fontSize:30}}>Welcome sneakerhead!</Text>
      </View>
        <View style ={{backgroundColor:'#a66874',padding:8,borderRadius:30}}>
        <Text style={{fontSize:25, color:'white',fontWeight: 'bold'}}>Choose Your Brand</Text>
        </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Nike')}>
        <Image 
            fadeDuration={1000} 
        style={{width:370,height:130}}
        resizeMode='contain'
        source={require('./assets/NIKELOGO.png')}/>
        </TouchableOpacity>
      </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Adidas')}>
          <Image
            fadeDuration={1000} 
            style={{width:370,height:130}}
            resizeMode='contain'
            source={require('./assets/ADISLOGO.png')}/>
          </TouchableOpacity>
        </View >
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Vans')}>
        <Image 
            fadeDuration={1000} 
            style={{width:370,height:130,}}
            resizeMode='contain'
            source={require('./assets/VANS.png')}/>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Converse')}>
        <Image 
            fadeDuration={1000} 
            style={{width:370,height:130}}
            resizeMode='contain'
            source={require('./assets/Converselogo.png')}/>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14faf6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
