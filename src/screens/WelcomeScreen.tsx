import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button } from 'react-native-elements';


const { width, height } = Dimensions.get('window')

class WelcomeScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            sliders : [
                {
                    icon: require('../assets/images/welcomeIcon.png'),
                    title: 'Lorem Ipsum Dolor Emet',
                    desc: 'Lorem Ipsum Dolor Emet, Lorem Ipsum Dolor Emet, Lorem Ipsum Dolor Emet'
                },
                {
                    icon: require('../assets/images/welcomeIcon.png'),
                    title: 'Lorem Ipsum Dolor Emet',
                    desc: 'Lorem Ipsum Dolor Emet, Lorem Ipsum Dolor Emet, Lorem Ipsum Dolor Emet'
                },
                {
                    icon: require('../assets/images/welcomeIcon.png'),
                    title: 'Lorem Ipsum Dolor Emet',
                    desc: 'Lorem Ipsum Dolor Emet, Lorem Ipsum Dolor Emet, Lorem Ipsum Dolor Emet'
                }
            ],
            activeSlide: 0

        }
    }
    _renderItem({ item, index }) {
        return (
            <View>
                <Image source={item.icon} style={styles.icon} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
            </View>
        );
    }
   get  pagination  () {
        // const {  activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={this.state.sliders.length}
                activeDotIndex={this.state.activeSlide}
                containerStyle={{ backgroundColor: 'transparent' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(0, 110, 203, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sliderContainer}>
                    <Carousel
                    layout={'default'}
                    data={this.state.sliders}
                    renderItem={this._renderItem}
                    sliderWidth={width - 20}
                    itemWidth={width - 20}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                     />
                     {this.pagination}
                </View>
                <Button title="Register" buttonStyle={styles.signUp}  onPress={() => this.props.navigation.navigate('Registration')} />
                <View style={styles.loginView}>
                    <Text>Have an Account?</Text>
                    <Button title="Login" type="clear" style={styles.login} onPress={() => this.props.navigation.navigate('Dashboard')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignItems : 'center',
        width : width,
        height : height
    },
    sliderContainer: {
        width: width - 32,
        marginVertical: 30
    },
    slider: {
        marginVertical: 15,
        overflow: 'visible' // for custom animations
    },
    icon: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginBottom: 10
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: '#444',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    desc: {
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
        color: '#111',
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center'
    },
    signUp : {
        width : 160,
        height : 40,
        alignSelf : 'center',
        borderRadius : 30,
        backgroundColor : '#00AFCB'
    },
    loginView : {
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row',
        marginTop : 10
    }
})

export default WelcomeScreen;