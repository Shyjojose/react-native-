import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';//no html or css we need to use react component
import { ScrollView } from 'react-native-web';
// import React, { useState } from "react";
import { Button } from "react-native";


export default function App() {
  console.log("app executed");//only use for  devolepment and testing performance issue
 
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <ScrollView>
        <view>
        <text style={styles.sectionTitle}>Registration Form</text>
        <Image
          source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}style={{ width: 200, height: 200 }}
          />
          </view>
          <text style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}>Email</text>
          <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="email"
      />
      <text style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}>Password</text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="password"
      />
     <Button 
        title="Sign in "
      />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
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
