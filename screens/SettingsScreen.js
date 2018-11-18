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
import Routes from '../screens/Routes';
import Profile from '../screens/Profile';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Account',
  };

  render() {
    if(this.props.email != null){
      return (
        <View style={styles.container}>
          <Profile/>
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <Routes/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});