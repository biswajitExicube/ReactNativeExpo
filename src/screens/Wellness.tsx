import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window')

class WellnessScreen extends Component {
    static navigationOptions = {
        title: 'Wellness',
    };
    state = {
        wellnessProducts: [
            {
                name: 'Modicare Enviroglobe',
                image: require('../assets/images/healthNutrition/enviroglobe.jpg'),
                price: 4500,
                packSize : 1,
                desc : "From our cellphones as morning alarm clocks to the WiFi routers, laptops and baby monitors, our daily lives revolve around using wireless communication technology. Add the radiations from nearby mobile towers and the high tension wire lines or even the servers in our offices; we are constantly exposed to Electro Magnetic Fields (EMFs) and EMFs emitted by various sources at the same time & at a given place from electrosmog.",
                descExtra : [
                    'Modicare Enviroglobe Safeguards you from this harmful eletro smog - anytime, anywhere.',
                    'Health Hazards from electrosmog.',
                    'Enviroglobe helps purify radiation from.',
                    'Potential health risks from electromagnetic radiation.'
                ],
                benefits : [
                    'We are surrounded by Electrosmog 24x7, which increases stress levels and affects health. Enviroglobe protects us from this harmful eletrosmog.',
                    'When placed in any household or office area, it neutralizes the harmful impact of Electromagnetic Radiation emiotted from the all the wi-fi devices, boosters, Mobile Towers etc. around it.',
                    'The globe helps to protect an area of approx, 300-350sq. ft. from the ill-effects of electro-magnetic radiations. It changes the harmful nature of radiation without altering the signal strength and quality.',
                    'EnviroGlobe helps in reducing the stress in the human body caused due to exposure to EMFs and Eletrosmog over a period of time.'
                ],
                certified : 'Tested on more than 1000 people and it has been proved that after having EnviroGlobe installed, pulse rate reduced by 4-7 percent in those who have a high pulse rate (> 82). Lower pulse rate indicates lower stress and better health.',
                directionUse : 'Place Enviroglobe in the area that you need to make radiation friendly. It covers 300-350 sq. ft. of area. Recharge it in sunlight/artificial light/lamp for 15 minutes once in a week.'
            },
            {
                name: 'Well Shilajit ojas gold with kesher & safed musli (30 capsules)',
                image: require('../assets/images/healthNutrition/shilajit_ojas.jpg'),
                price: 599,
                desc : 'The goodness of 14 herbs and gold have potential aphrodisiac, adaptogenic and antioxidant action that helps improve male sexual functions, vigor and vitality. The premium quality Shilajit with Gold and Kesar works synegistically with other proven herbs such as Safed Musli, Ashwagandha, Kaunch Beej, Gokhru in improving strength, stamina and libido in males. It also helps in improving low spermatic counts and the molitity of sperms. Completely natural, it is be consumed on a regular basis to improve overall wellbeing.',
                indicationLoss : [
                    'Libido Loss',
                    'Oligospermia (low sperm count)',
                    'Erectile Dysfunction',
                    'Male Infertility'
                ],
                ingredients : [
                    {
                        name : 'Shilajit',
                        desc : 'Spermatogenic, Improves Fertility.'
                    },
                    {
                        name : 'Keser',
                        desc : 'High antioxidants improve mood, libido, and sexual functions.'
                    },
                    {
                        name : 'Gold',
                        desc : 'Cures infertility, general debility, muscular weakness, and sexual weakness in men.'
                    },
                    {
                        name : 'Safed Musli',
                        desc : 'Aphrodisiac & Adaptogen.'
                    },
                    {
                        name : 'Ashwagandha',
                        desc : 'Improves semen quality. Regulates reproduction of male hormones and antioxidants.'
                    },
                    {
                        name : 'Gokhru',
                        desc : 'Aphrodisiac, Androgen supports production of male hormones Improves fuctioning of reproductive organs. Improve Libido and Vitality.'
                    },
                    {
                        name : 'Kaunch Beej',
                        desc : 'Nervine tonic & Aphrodisiac.'
                    }
                ],
                benefits : [
                    'Potential Aphrodisiac, Adaptogen Antioxidant action.',
                    'Improve erection- stay longer naturally Reduces.',
                    'Reduces premature ejaculation.',
                    'Completly natural',
                    'Improve sperm count and sperm motility.',
                    'Improve male sexual functions, vigor and vitality.',
                    'Improves strength, stamina and libido.'
                ],
                suggestedUse : [
                    'For adult males. 1 capsule daily at bedtime with water or milk.',
                    '*A proprietary ayurvedic medicine.'
                ],
                storage : 'Store in a cool and dry place. Keep out of reach of children.'
            },
            {
                name: 'Well all plant protien powder (200 G)',
                image: require('../assets/images/healthNutrition/enviroglobe.jpg'),
                price: 936,
                desc : '',
                descList : [
                    {
                        question : 'Why are Proteins important?',
                        answer : 'Proteins are a class of compounds found in every cell of the body. They are vital for the sustenance of life and are one of the most important nutrients required by the body. They form important component of muscles, bones, skin, hair and vital body fluids like blood. Proteins are necessary for growth and tissue repair. They regulate important metabolic processes in the body. Proteins also help in maintaining lean body, build muscle mass, satiating hunger and sustaining energy.'
                    },
                    {
                        question : 'Why do I need to consume Proteins daily?',
                        answer : 'The regular wear & tear of the body makes daily intake of protein necessary. The need of protein by our body is constant as it does not store express protein, therefore daily intake is necessary.'
                    },
                    {
                        question : 'Who all need Protein?',
                        answer : [
                            {
                                proteinAge : 'Growing child',
                                proteinAgeDesc : 'Essential for the overall growth and development.'
                            },
                            {
                                proteinAge : 'Adults',
                                proteinAgeDesc : 'Imprortant for maintaining high energy levels all day. Additionally helps in building and rebuilding muscle mass as well as growing and repairing the cells.'
                            },
                            {
                                proteinAge : 'Elderly',
                                proteinAgeDesc : 'Vital to preserve lean muscle mass and stremgth thus aiding in a healthy lifestyle.'
                            },
                            {
                                proteinAge : 'Athletes/Sports Person',
                                proteinAgeDesc : 'For muscle mass development, muscle recovery strength and energy. Lactose intolerant people. Anyone in need of high protein diet.'
                            }
                        ]
                    },
                    {
                        question : 'Protein requirement as per ICMR (Indian Council of Medical Research)',
                        answer : 'An adult requires on an average 1g/kg. body weight/day. A child requires on an 1.2g/kg. body weight/day.'
                    },
                    {
                        question : 'SOY Protein isolate',
                        answer : 'USFDA has determind that diets low in satured fat and cholesterol that include 25g of soy protein a day may reduce the risk of heart disease. Help in satiety and weight control, muscke recovery and muscle mass development, bone health & cognition.'
                    },
                    {
                        question : 'Wheat Protein',
                        answer : 'Has high Glutamine content and supports gut health, immune health, satiety and weight control, muscle recovery and muscle mas'
                    },
                    {
                        question : 'Pea Protein Isolate',
                        answer : 'Is rich in arginine, branched chain amino acid andd lysine. Know for healthy blood circulation and energy production.'
                    }
                ]
            }
        ],
        
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.listContainer}>
                        {this.state.wellnessProducts.map((item, key) => {
                            return (
                                <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate('Details',{item})}>
                                    <View style={styles.itemContainer}>
                                        <Image source={item.image} style={{ width: width / 4, height: width / 4, marginVertical: 5 }} />
                                        <Text style={{ textTransform: 'uppercase', marginVertical: 10, textAlign: 'center' }}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}

                    </View>
                </ScrollView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    listContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        // padding: 16
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 2 - 20,
        // borderBottomColor: '#ccc',
        // borderBottomWidth: 1,
        borderWidth: 0,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 1,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical : 15,
        padding: 5,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 10,
    }
})

export default WellnessScreen;