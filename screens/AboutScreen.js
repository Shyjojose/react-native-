import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
export default function AboutScreen({navigation}) {
  return (
	<View style={styles.container}>
	  <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
		<Text style={styles.text}>A COVID-19 vaccine might:Prevent you from getting COVID-19 or from becoming seriously ill or dying due to COVID-19
Prevent you from spreading the virus that causes COVID-19 to others Add to the number of people in the community who are protected from getting COVID-19 — making it harder for the disease to spread and contributing to herd immunity
Prevent the virus that causes COVID-19 from spreading and replicating, which allows it to mutate and possibly become more resistant to vaccines</Text>
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
	</View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center' , alignItems: 'center'},
  text: {
	fontSize: 18,
	fontWeight: 20,
	padding: 10,
  },
   text1: {
	fontSize: 18,
	fontWeight: 50,
	padding: 10,
  },
  button: {
	margin: 2,
	padding:10
  },
});
