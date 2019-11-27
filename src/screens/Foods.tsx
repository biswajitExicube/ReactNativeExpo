import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FoodsBeverage extends Component {
    static navigationOptions = {
        title: 'Foods & Beverage',
    };
    render() {
        return (
            <View>
                <Text>FoodsBeverage</Text>
            </View>
        )
    }
}

export default FoodsBeverage;