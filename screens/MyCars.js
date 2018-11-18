import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { Actions } from 'react-native-router-flux';
import CarRoutes from '../screens/CarRoutes';

export default class MyCars extends React.Component {

  constructor(){
    super();
    this.state = {
      shit: {},
      loading: true,
      loaded: false,
      time: null
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleString(),
      });
      this.getStuff();
    }, 1000);
  }

  static navigationOptions = {
    title: 'Your Cars',
  };

  viewAddCar(){
    Actions.add();
  }

  getStuff = () => {

    fetch('https://csexpo.tech/hackmnl/admin/try.php', {
      method: 'post',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shit: this.state.shit
      })
    }).then((response) => response.json()).then((responseJson) => {
      this.state.shit = responseJson;
      this.setState({loading: false, disabled: false, loaded: true});
    }).catch((error) => {
      alert(error);
      this.setState({loading: false, disabled: false});
    });

  }
  render() {
    if(this.state.loading == true){
      this.getStuff();
    }
    if(this.state.loaded == true){
      contents = this.state.shit.map(function(item){
        cid = item[0];

        viewCar = (id) => {
          Actions.view({cid: id});
        }
        return(
          <TouchableOpacity  activeOpacity = { 0.8 } style = { styles.car } onPress={() => this.viewCar(cid)}>
            <View>
              <Text style={styles.carText}>{item[3]} {item[7]}</Text>
            </View>
          </TouchableOpacity>
        )
      });
      return (
        <ScrollView>
          <View style={styles.container}>
            {contents}
            <TouchableOpacity  style = { styles.button } onPress = { this.viewAddCar }>
                <Text style = { styles.buttonText }>Add a car</Text>
            </TouchableOpacity>
          </View>
  
        </ScrollView>
      );
    }else{
      return (
        <ScrollView>
  
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    alignItems: 'center'
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
  }
});
