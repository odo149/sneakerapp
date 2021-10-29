import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput,Button,View,TouchableOpacity, ImageBackground } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>

        <View>
        <Text style={{
          fontSize: 40,
          color: 'black',
          fontWeight: 'bold',
          paddingBottom: 20
          }}>Hello sneakerhead!
        </Text>
        </View>
      <ImageBackground 
      blurRadius={50}
      style={{height:350,alignContent:'center',justifyContent:'center'}}
      justifyContent={'space-evenly'}
      source={require("./assets/converseb.png")}>
        <Text style = {styles.textstyle}>username or email</Text>
        <View style= {styles.input}>
        <TextInput 
          placeholder= "username or email"
        />
      </View>

      <View style={{paddingTop: 20}}>
      <Text style = {styles.textstyle}>password</Text>
      </View>
      <View style= {styles.input}>
        <TextInput 
        placeholder = 'password'
        secureTextEntry= {true}/>
      </View >
      </ImageBackground>
      <View style = {{paddingTop: 50,
      width: 370,
      elevation: 5000}}>
        <Button        
            onPress={() => navigation.navigate('Home')}
            title = "SIGN IN"
            color = "#241f1f"/>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#e8e9eb',
    borderRadius: 20,
    padding:20,
    width: 370
  },
  textstyle: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'
  }

});
