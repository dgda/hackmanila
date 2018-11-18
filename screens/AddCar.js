import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
	TextInput,
	Picker,
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import { Actions } from 'react-native-router-flux';

export default class AddCar extends React.Component {
  static navigationOptions = {
    title: 'Add a car',
  };

	constructor(){
		super();
		this.state = {
			brand: '',
			model: '',
			rate: '',
			type: '',
			description: '',
			plateNumber: '',
			score: '5',
		}
	}

	submit = () => {
    this.setState({loading: true, disabled: true}, () => {
      fetch('https://csexpo.tech/hackmnl/addCar.php', {
        method: 'post',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
					brand: this.state.brand,
					model: this.state.model,
					rate: this.state.rate,
					type: this.state.type,
					description: this.state.description,
					plateNumber: this.state.plateNumber,
					score: this.state.score,
        })
      }).then((response) => response.json()).then((responseJson) => {
				if(responseJson != 'Error! Try Again.'){
					alert(responseJson);
					Actions.pop();
				}else{
					alert(responseJson);
				}
				//navigate('SettingsScreen', {params: {email: this.state.email}});
        this.setState({loading: false, disabled: false});
      }).catch((error) => {
        alert(error);
        this.setState({loading: false, disabled: false});
      });
    });
	}

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
			<ScrollView>
				<View style={styles.container}>
					<Picker
						selectedValue={this.state.brand}
						style={{ height: 50, width: 100 }}
						onPress={(itemValue, itemIndex) => this.setState({brand: itemValue})}>
						<Picker.Item label="Mitsubishi" value="mitsubishi" />
					</Picker>
				</View>
				<View style={styles.container}>
					<Picker
						selectedValue={this.state.model}
						style={{ height: 50, width: 100 }}
						onValueChange={(itemValue, itemIndex) => this.setState({model: itemValue})}>
						<Picker.Item label="Montero" value="montero" />
						<Picker.Item label="Lancer EX" value="lancerex" />
						<Picker.Item label="Mirage" value="mirage" />
					</Picker>
				</View>
				<View style={styles.container}>
					<Picker
						selectedValue={this.state.type}
						style={{ height: 50, width: 100 }}
						onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
						<Picker.Item label="Sedan" value="Sedan" />
						<Picker.Item label="SUV" value="suv" />
						<Picker.Item label="Luxury" value="luxury" />
					</Picker>
				</View>
				<View style={styles.container}>
					<TextInput style={ styles.inputBox } 
						underlineColorAndroid='rgba(0,0,0,0)'
						placeholder='Base Rate'
						placeHolderTextColor='#ccc'
						keyboardType="number-pad"
						onChangeText={(text) => this.setState({rate: text})}
						onSubmitEditing={()=>this.password.focus()} />
				</View>
				<View style={styles.container}>
					<TextInput style={ styles.inputBox } 
						underlineColorAndroid='rgba(0,0,0,0)'
						placeholder='Description'
						placeHolderTextColor='#ccc'
						onChangeText={(text) => this.setState({description: text})} />
					<TextInput style={ styles.inputBox } 
						underlineColorAndroid='rgba(0,0,0,0)'
						placeholder='Plate Number'
						placeHolderTextColor='#ccc'
						keyboardType="number-pad"
						onChangeText={(text) => this.setState({plateNumber: text})} />
					<TouchableOpacity style={styles.button} onPress={this.submit}>
						<Text style={styles.buttonText}>SUBMIT</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	flexGrow: 1,
	justifyContent: 'center',
	alignItems: 'center',
  },
  inputBox: {
	  width: 300,
	  height: 50,
	  backgroundColor: 'rgba(255,255,255,0.3)',
	  borderRadius: 25,
	  paddingHorizontal: 16,
	  fontSize: 16,
	  color: '#000',
	  marginVertical: 10,
  },
  button: {
	width: 300,
	height: 50,
	borderRadius: 25,
	backgroundColor: '#00AAFF',
	justifyContent: 'center',
	alignItems: 'center',
	marginVertical: 10,
  },
  buttonText: {
	  fontSize: 16,
	  fontWeight: '500',
	  color: '#fff',
  }
});