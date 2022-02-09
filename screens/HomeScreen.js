import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';//no html or css we need to use react component
import { ScrollView } from 'react-native-web';
// import Myview from '';
import { useState } from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function HomeScreen() {
  console.log("app executed");//only use for  devolepment and testing performance issue
  const [email, setEmail] = useState('gmail.com');
  const [password, setPassword] = useState('gg');
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <Text>Hello World</Text>
      
      <ScrollView>
        <view>
        <text style={{fontSize:20,
            fontFamily: 'Montserrat',
            fontWeight:'bold'}}>Registration Form</text>
        <Image
          source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}style={{ width: 200, height: 200 }}
          />
          </view>
          <text style={{
            flex: 2,
            textAlign: 'top',
            padding:15,
            flexDirection: 0,
            fontSize:20,
            fontFamily: 'Montserrat',
            fontWeight:'bold',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}>Email</text>

          <TextInput
        style={{
          height: 40,
          alignItems:'flex-end',
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="enter your email"
         onChangeText = {email => setEmail(email)}
        //  defaultValue = {email}
      />
      {/* <Myview name = {email} />
       <Text>your {email} id is acceptable</Text> */}
      <text style={{
        fontSize:20,
        padding:15,
        fontFamily: 'Montserrat',
        fontWeight:'bold',
        alignItems:'flex-end',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}>Password</text>
      <TextInput
        style={{
          height: 40,
        
          alignItems: 'flex-end',
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder ="password"
        //  defaultValue={password}
         onChangetext = {password => setPassword(password)}
      />
     <Button style={{padding:20, margin:2,borderWidth:5}
     }
        title="Sign in "
      />
      </ScrollView> {/* the scroll view is used to make the view scroll vertical or horizontal */}
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#E8EAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});