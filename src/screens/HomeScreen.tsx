import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <View>
                <Text>Home</Text>
            </View>
        )
    }
}

export default HomeScreen;