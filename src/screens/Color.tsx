import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ColorScreen extends Component {
    static navigationOptions = {
        title: 'Color',
    };
    render() {
        return (
            <View>
                <Text>ColorScreen</Text>
            </View>
        )
    }
}

export default ColorScreen;