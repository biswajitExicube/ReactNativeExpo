import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Registration from './src/components/Registration';
import SideMenu from './src/components/SideMenu';
import Amoli from './src/screens/Amoli';
import ColorScreen from './src/screens/Color';
import FoodsBeverage from './src/screens/Foods';
import HomeCare from './src/screens/HomeCare';
import OthersScreen from './src/screens/Others';
import PersonalCare from './src/screens/PersonalCare';
import SkinCare from './src/screens/SkinCare';
import WellnessScreen from './src/screens/Wellness';
import Details from './src/components/Details';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDa0MYFOsRJUJoxeO6CMBCVEHwnayWYtvI",
  authDomain: "sidebyside-5dfcc.firebaseapp.com",
  databaseURL: "https://sidebyside-5dfcc.firebaseio.com",
  projectId: "sidebyside-5dfcc",
  storageBucket: "sidebyside-5dfcc.appspot.com",
  messagingSenderId: "1094888642852",
  appId: "1:1094888642852:web:cc45c9c009a4552b56bbb1",
  measurementId: "G-2H5Y4NVLR5"
};

firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const WellnessStack = createStackNavigator(
  {
    Main : WellnessScreen,
    Details : Details
  },
  {
    initialRouteName : 'Main'
  }
)

const AppStackNavigator = createStackNavigator(
  {
    Home : HomeScreen,
    About : AboutScreen,
    Settings : SettingsScreen,
    Amoli : Amoli,
    Color : ColorScreen,
    Foods : FoodsBeverage,
    HomeCare : HomeCare,
    Others : OthersScreen,
    PersonalCare : PersonalCare,
    SkinCare : SkinCare,
    Wellness : WellnessStack
  },
  {
    defaultNavigationOptions : ({ navigation }) => {
      return {
        headerStyle : {
          backgroundColor : 'orange'
        },
        headerLeft :  ( <Icon
        name='md-menu'
        type='ionicon'
        color='#fff'
        size={30}
        containerStyle={{marginLeft: 16}}
        onPress={() => navigation.openDrawer()} />
        )
      }
    }
  }
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home : AppStackNavigator,
    About : AboutScreen,
    Settings : SettingsScreen,
    Amoli : Amoli,
    Color : ColorScreen,
    Foods : FoodsBeverage,
    HomeCare : HomeCare,
    Others : OthersScreen,
    PersonalCare : PersonalCare,
    SkinCare : SkinCare,
    Wellness : WellnessScreen
  },
  {
    contentComponent: SideMenu
  }
)

const AppSwitchNavigator = createSwitchNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: AppDrawerNavigator },
    Registration: { screen: Registration }
  }
)

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
