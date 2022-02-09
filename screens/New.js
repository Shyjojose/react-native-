import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
export default function AboutScreen({navigation}){
    return(
        <View style={styles.container}>
	  <Text style={(styles.text, {fontWeight: 'bold'})}>In Detail Screen</Text>
      
	  <Button
		style={styles.button}
		title="<<Back"
		onPress={() => navigation.goBack()}
	  />
	</View>
    

    );
}
const styles = StyleSheet.create({
    container: {
      margin: 2,
      padding: 10,
      height: 110,
      borderWidth: 1,
      borderRadius: 6,
    },
    text: {
      fontSize: 20,
      padding: 10,
    },
    button: {
      marginVertical: 2,
    },
  });