import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { WebBrowser } from 'expo';


import { Actions } from 'react-native-router-flux';
import { MonoText } from '../components/StyledText';

export default class AllCars extends React.Component {

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
    }, 5000);
  }

  static navigationOptions = {
    title: 'Available cars',
  };

  viewAddCar(){
    Actions.add();
  }

  getStuff = () => {

    fetch('https://csexpo.tech/hackmnl/admin/tryHarder.php', {
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

        viewCar = (id) => {
          Actions.view({cid: id});
        }
        cid = item[0];
        return(
          <TouchableOpacity  activeOpacity = { 0.8 } style = { styles.car } onPress={() => viewCar(item[0])}>
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
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
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
