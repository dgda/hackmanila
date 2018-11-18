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
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import SettingsScreen from '../screens/SettingsScreen';
import { Actions } from 'react-native-router-flux';
export default class Form extends React.Component {
  static navigationOptions = {
    title: 'Account',
  };

	constructor(){
		super();
		this.state = {
			email: '',
			password: '',
			loading: false,
			disabled: false
		}
	}

	login = () => {
    this.setState({loading: true, disabled: true}, () => {
      fetch('https://csexpo.tech/hackmnl/login.php', {
        method: 'post',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      }).then((response) => response.json()).then((responseJson) => {
				if(responseJson != 'Error! Try Again.'){
					Actions.refresh({email: responseJson});
					Actions.route({email: responseJson});
					//alert(responseJson);
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
    return (
      <View style={styles.container}>
		<TextInput style={ styles.inputBox } 
			underlineColorAndroid='rgba(0,0,0,0)'
			placeholder='Email'
			placeHolderTextColor='#ccc'
			keyboardType="email-address"
			onSubmitEditing={()=>this.password.focus()}
			onChangeText = {(text) => this.setState({email: text})} />
		<TextInput style={ styles.inputBox } 
			underlineColorAndroid='rgba(0,0,0,0)'
			placeholder='Password'
			secureTextEntry={true}
			placeHolderTextColor='#ccc'
			onChangeText = {(text) => this.setState({password: text})}
			ref={(input) => this.password = input} />
		<TouchableOpacity disabled={this.state.disabled} style={styles.button} onPress={this.login}>
			<Text style={styles.buttonText}>{this.props.type}</Text>
		</TouchableOpacity>
      </View>
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