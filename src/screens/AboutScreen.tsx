import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AboutScreen extends Component {
    static navigationOptions = {
        title: 'About',
    };
    render() {
        return (
            <View>
                <Text>About</Text>
            </View>
        )
    }
}

export default AboutScreen;