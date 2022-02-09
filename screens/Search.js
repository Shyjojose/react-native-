import * as React from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';
export default class App extends React.Component {
  state = {
	toggleModal: false,
  };
  toggleModalVisibility() {
	this.setState({toggleModal: !this.state.toggleModal});
  }
  render() {
	return (
	  <View style={styles.container}>
		<Modal
		  animationType="fade"
		  transparent={true}
		  visible={this.state.toggleModal}
		  onDismiss={() => {
			Alert.alert('Modal has been closed.');
		  }}>
		  <View style={styles.modal}>
			<View
			  style={{backgroundColor: 'white', padding: 25, borderRadius: 6}}>
			  <Text style={{fontSize: 18}}>
				Use Modal to present content above an enclosing view
			  </Text>
			  <View style={{paddingTop: 10}}>
				<Button
				  onPress={() => {
					this.toggleModalVisibility();
				  }}
				  title="Dismiss Modal"
				/>
			  </View>
			</View>
		  </View>
		</Modal>
		<Button
		  onPress={() => {
			this.toggleModalVisibility();
		  }}
		  title="Show Modal"
		/>
	  </View>
	);
  }
}
const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
  },
  modal: {
	backgroundColor: '#d3d3d3',
	padding: 30,
	justifyContent: 'center',
	alignItems: 'center',
	flex: 1,
  },
});
