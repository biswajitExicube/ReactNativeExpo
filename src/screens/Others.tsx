import React, { Component } from 'react';
import { View, Text } from 'react-native';

class OthersScreen extends Component {
    static navigationOptions = {
        title: 'Others'
    };
    render() {
        return (
            <View>
                <Text>OthersScreen</Text>
            </View>
        )
    }
}

export default OthersScreen;