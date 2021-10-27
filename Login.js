import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput,Button,View,TouchableOpacity, ImageBackground } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>

      <ImageBackground 
      blurRadius={30}
      justifyContent={'space-evenly'}
      source={require("./assets/CONVERSE.png")}>

        <Text style={{
          fontSize: 40,
          color: 'black'
          }}>Hello sneakerhead!
        </Text>
        <Text style = {{
          fontSize: 25,
          color: 'black'
          }}>username or email
        </Text>
        <View style= {{
        backgroundColor: '#e8e9eb',
        borderRadius: 20,
        padding: 20,
        width: 370
      }}>
        <TextInput 
          placeholder= "username or email"
        />
      </View>
      <Text style = {{
        fontSize: 25,
        color: 'black'
      }}>password</Text>
      <View style= {{
        backgroundColor: '#e8e9eb',
        borderRadius: 20,
        padding:20,
        width: 370
      }}>
        <TextInput 
        placeholder = 'password'
        secureTextEntry= {true}/>
      </View >
      </ImageBackground>
      <View style = {{paddingTop: 50,
      width: 370,
      elevation: 300}}>
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
});
