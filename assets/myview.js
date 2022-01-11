import React from 'react';
import {View, Text} from 'react-native';
export default function MyView(props) {
  return (
      
	<View style={{margin: 5, padding: 8}}>
		{/* if({props.name == '%gmai.com'})
		{
			{props.name} = "acceptable" 
		} */}
	  <Text>Received prop value: {props.name}</Text>
	</View>
  );
}
