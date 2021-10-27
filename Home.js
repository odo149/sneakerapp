import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image, Text, View } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:30}}>Welcome sneakerhead!</Text>
        <View>
          <Image
            fadeDuration={1000} 
            style={{width:370,height:100}}
            source={require('./assets/ADISLOGO.png')}/>
        </View >
      <View>
        <Image 
            fadeDuration={1000} 
            style={{width:370,height:100,}}
            source={require('./assets/JORDAN.png')}/>
      </View>
        <Image 
            fadeDuration={1000} 
            style={{width:370,height:100}}
            source={require('./assets/CONVERSE.png')}/>
      <View>
      </View>
        <Image 
            fadeDuration={1000} 
        style={{width:370,height:100}}
        source={require('./assets/NIKELOGO.png')}/>
      <View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
