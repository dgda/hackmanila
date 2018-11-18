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
import Signup from '../screens/Signup';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  signup(){
    Actions.signup()
  }

  constructor(){
    super();
    this.state = {
      shit: {},
      loaded: false,
      disabled: true
    }
  }

  fet = () =>{
    
    fetch('https://csexpo.tech/hackmnl/admin/getTransaction.php', {
      method: 'post',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shit: this.state.shit
      })
    }).then((response) => response.json()).then((responseJson) => {
      //alert(responseJson);
      this.state.shit = responseJson;
      this.setState({loading: false, disabled: false, loaded: true});
    }).catch((error) => {
      alert(error);
      this.setState({loading: false, disabled: false, loaded: true});
    });
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    if(this.state.disabled == true){
      this.fet();
    }
    if(this.state.loaded == true){
      this.fet();
      contents = this.state.shit.map(function(item){
        viewTransaction = (id) =>{
          Actions.goto({pid: id});
        }
        return (
          <TouchableOpacity  activeOpacity = { 0.8 } style = { styles.car } onPress={() => viewTransaction(item[0])}>
            <View>
              <Text style={styles.carText}>{item[0]} {item[1]}</Text>
            </View>
          </TouchableOpacity>
        )
      });
      return (
        <ScrollView>
          <View style={styles.container}>
            <Logo/>
            <View style={styles.fucked}>
              {contents}
            </View>
            <Form type="LOGIN"/>
            <View style={styles.signupTextContent}>
              <Text style={styles.signupText}>Don't have an account yet?</Text>
              <TouchableOpacity onPress={this.signup}>
                <Text style={styles.signupButton}> Register.</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          </ScrollView>
      );
    }else{
      return(<View></View>)
    }
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
  },
  car: {
    width: 320,
    height: 80,
    borderRadius: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  carText: {
    fontSize: 26,
    fontWeight: '500',
  },
  fucked: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});