import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import SettingsScreen from './src/screens/SettingsScreen';

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Home : HomeScreen,
    About : AboutScreen,
    Settings : SettingsScreen
  },
  {
    defaultNavigationOptions : ({ navigation }) => {
      return {
        headerStyle : {
          backgroundColor : 'orange'
        },
        headerLeft :  <Ionicons name="md-menu" size={32} color="green" style={{paddingLeft: 10}} onPress={() => navigation.openDrawer()} />
      }
    }
  }
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home : AppStackNavigator,
    About : AboutScreen,
    Settings : SettingsScreen
  }
)

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
