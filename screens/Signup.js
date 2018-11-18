import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import { Actions } from 'react-native-router-flux';

import Logo from '../screens/Logo';
import Form from '../screens/Form';
import Login from '../screens/Login';

export default class Signup extends React.Component {
  static navigationOptions = {
    title: 'Signup',
  };

  signup(){
    Actions.pop()
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
	  	<Logo/>
		<Form type="SIGNUP"/>
		<View style={styles.signupTextContent}>
			<Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}> Login.</Text>
          </TouchableOpacity>
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signupTextContent: {
	  flexGrow: 1,
	  alignItems: 'flex-end',
	  justifyContent: 'center',
	  padding: 16,
	  flexDirection: 'row',
  },
  signupText: {
	  color: 'rgba(0,0,0,0.3)',
	  fontSize: 16,
  },
  signupButton: {
	color: 'rgba(0,0,0,0.7)',
	fontSize: 16,
	fontWeight: '500'
  }
});