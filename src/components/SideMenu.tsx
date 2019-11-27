import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';

class SideMenu extends Component{
    render() {
        return (
            <View style={styles.container}>
        <ScrollView>
          <View>
            <TouchableHighlight style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() =>this.props.navigation.navigate('Home')}>
              Home
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() =>this.props.navigation.navigate('About')}>
              About
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() =>this.props.navigation.navigate('Settings')}>
              Settings
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() =>this.props.navigation.navigate('Wellness')}>
              Wellness
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() =>this.props.navigation.navigate('SkinCare')}>
              Skin Care
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() =>this.props.navigation.navigate('Color')}>
              Color
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() =>this.props.navigation.navigate('PersonalCare')}>
              Personal Care
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() =>this.props.navigation.navigate('HomeCare')}>
              Home Care
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() =>this.props.navigation.navigate('Foods')}>
              F & B
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() =>this.props.navigation.navigate('Amoli')}>
              Amoli
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() =>this.props.navigation.navigate('Others')}>
              Others
              </Text>
            </TouchableHighlight>
          </View>
          </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
      },
      navItemStyle: {
        padding: 10
      },
      navSectionStyle: {
        backgroundColor: 'lightgrey'
      },
      sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
      },
      footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
      }
})

export default SideMenu;