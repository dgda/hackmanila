import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { Actions } from 'react-native-router-flux';
import CarRoutes from '../screens/CarRoutes';

export default class LinksScreen extends React.Component {

  constructor(){
    super()
    this.state = {
      id: '',
      loading: false,
      disabled: false
    }
  }

  static navigationOptions = {
    title: 'Your Cars',
  };

  render() {
    this.getStuff;
    return (
     <CarRoutes/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
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
