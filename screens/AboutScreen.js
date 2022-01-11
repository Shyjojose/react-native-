import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
export default function AboutScreen({navigation}) {
  return (
	<View style={styles.container}>
	  <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
		<Text style={styles.text}>In About Screen</Text>
		<Text style={styles.text}>Navigation with Navigate methods</Text>
		<View
		  style={{
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'baseline',
		  }}>
		  <Button
			style={styles.button}
			title="Go to Home"
			onPress={() => navigation.navigate('Home')}
		  />
		  <Button
			style={styles.button}
			title="Go back"
			onPress={() => navigation.goBack()}
			// programmatically go back by calling navigation.goBack()
		  />
		</View>
	  </View>
	  <View
		style={{flex: 1, justifyContent: 'flex-start', alignItems: 'stretch'}}>
		<Text style={styles.text}>Navigation with push/pop methods</Text>
		<Button
		  style={styles.button}
		  title="Visit About again"
		  onPress={() => navigation.push('About')} // will not work in Tab
		/>
		<Button
		  style={styles.button}
		  title="Visit first screen in stack"
		  onPress={() => navigation.popToTop()} // will not work in Tab
		/>
	  </View>
	</View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-around', alignItems: 'center'},
  text: {
	fontSize: 18,
	padding: 10,
  },
  button: {
	margin: 2,
  },
});
