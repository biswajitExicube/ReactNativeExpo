import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

const { width, height } = Dimensions.get('window');

class Details extends Component{
    constructor(props){
        super(props)
        console.log(props.navigation.state.params.item)
    }
    render() {
        const params = this.props.navigation.state.params
        return (
            <View>
                <Text>{params.item.desc}</Text>
                {params.item.descExtra.map((item, key) => {
                    return(
                    <Text key={key}>-  {item}</Text>
                    )
                })}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})

export default Details;