import React from "react";
import { StyleSheet, Text, TextInput, Animated, FlatList, StatusBar, Image, TouchableOpacity, Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Calendar } from 'react-native-calendars';
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

const images = [
    {
        uri: "https://images.unsplash.com/photo-1573914801487-b7f3ac3ded18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
        name: "Dr. Arman"
    },
    {
        uri: "https://images.unsplash.com/photo-1573914801487-b7f3ac3ded18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
        name: "Dr. Arman"
    },
    {
        uri: "https://images.unsplash.com/photo-1573914801487-b7f3ac3ded18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
        name: "Dr. Arman"
    }
];

class EmpAbility extends React.Component {
    state = {
        serviceData: [
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba23423sdf',
                title: 'First Item',
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63234234dsf',
                title: 'Second Item',
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e29d72234234sdf',
                title: 'Third Item',
            },
            {
                id: '586sdfsd94a0f-3da1-471f-bd96-145571e29d72234234sdf',
                title: 'Third Item',
            },
        ],
        isDateTimePickerVisible: false,
    }
    renderItem1 = ({ item }) => {
        return (
            <View style={styles.item}>
                <View style={styles.buttonContainer}>
                    <Image
                        style={{
                            width: 108,
                            height: 108,
                        }}
                        resizeMode={'cover'}
                        source={require('../../assets/self_service_pic_2.png')}
                    />
                    <View style={{ width: '76%', marginStart: 10, marginEnd: 10 }}>
                        <View style={styles.buttonContainer}>
                            <Text style={{ width: "80%", textAlign: 'left' }}>Implant Bridges </Text>
                            <TouchableOpacity style={{
                                borderRadius: 4,
                            }}>
                                <Image
                                    style={{
                                        width: 26,
                                        height: 26,
                                        marginEnd: 2
                                    }}
                                    resizeMode={'cover'}
                                    source={require('../../assets/edit.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                borderRadius: 4,
                            }}>
                                <Image
                                    style={{
                                        width: 26,
                                        height: 26,
                                        marginEnd: 2
                                    }}
                                    resizeMode={'cover'}
                                    source={require('../../assets/delete.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ width: "50%", fontWeight: 'bold' }}>25.00 AED </Text>
                        <Text style={{ width: "98%", color: '#B3B3B3' }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,  </Text>
                        <Text style={{ width: "98%", color: '#808080' }}>2 Hrs 30 Min </Text>
                    </View>
                </View>
            </View >
        )
    }

    renderItem = ({ item, idx }) => {
        return (
            <TouchableOpacity activeOpacity={1} style={{ margin: 0 }} onPress={() => { }}>
                <Image style={{ width: width / 4, height: width / 4, borderRadius: 10 }} source={{ uri: item.uri }} />
                <Text style={{ textAlign: "center", marginTop: 5 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 18, marginLeft: 10, marginVertical: 20, fontWeight: "bold" }}>ADD EMPLOYEE & AVALIABILITY</Text>
                <Animated.View>
                    <Carousel
                        data={images}
                        sliderWidth={width}
                        itemWidth={100}
                        inactiveSlideOpacity={0.75}
                        inactiveSlideScale={0.9}
                        renderItem={this.renderItem}
                    />
                </Animated.View>
                <Text style={{ fontSize: 18, marginLeft: 10, marginVertical: 20, fontWeight: "bold", opacity: 0.5 }}>DAYS AVAILABILITY</Text>
                <Calendar
                    // Initially visible month. Default = Date()
                    theme={{
                        monthTextColor: 'blue',
                    }}
                    current={'2021-02-11'}
                    renderHeader={(date) => {/*Return JSX*/ }}
                    enableSwipeMonths={true}
                    markedDates={{
                        '2021-02-15': { textColor: 'green' },
                        '2021-02-12': { startingDay: true, color: 'green' },
                        '2021-02-05': { selected: true, endingDay: true, color: 'green', textColor: 'gray' },
                        '2021-02-06': { selected: true, endingDay: true, color: 'green', textColor: 'gray' },
                        '2021-02-10': { selected: true, endingDay: true, color: 'green', textColor: 'gray' },
                        '2021-02-11': { selected: true, endingDay: true, color: 'green', textColor: 'gray' },
                        '2021-02-12': { selected: true, endingDay: true, color: 'green', textColor: 'gray' },
                         
                    }}
                    
                />
                <Text style={{ fontSize: 18, marginLeft: 10, marginVertical: 20, fontWeight: "bold", opacity: 0.5 }}>TIME AVAILABILITY</Text>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TextInput
                        placeholder="From"
                        style={{
                            borderWidth: 2,
                            borderColor: "#ddd",
                            height: 30,
                            padding: 5,
                            width: width / 2 - 10,
                        }}
                    />
                    <TextInput
                        style={{
                            borderWidth: 2,
                            borderColor: "#ddd",
                            padding: 5,
                            height: 30,
                            width: width / 2 - 10,
                            marginLeft: 10
                        }}
                        placeholder="To"
                    />
                </View>
                <Text style={{ fontSize: 18, marginLeft: 10, marginVertical: 20, fontWeight: "bold", opacity: 0.5 }}>SELECT SERVICE</Text>
                <FlatList
                    data={this.state.serviceData}
                    renderItem={this.renderItem1}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        );
    }
}
export default EmpAbility;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 66,
        height: 58,
    },
    buttonContainer: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    textHeading: {
        width: '47%',
        fontSize: 18,
        marginStart: 16,
        marginBottom: 16,
        marginTop: 32,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    textLabel: {
        textAlign: 'left',
        marginStart: 8,
        marginBottom: 8,
        color: '#4D4D4D',
        marginTop: 16,
        fontWeight: 'bold',
        width: "94%",
    },
    textInput: {
        height: 40,
        width: "94%",
        padding: 10,
        borderRadius: 4,
        borderColor: 'gray',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
    },
    buttonStyle: {
        width: "46%",
        marginEnd: 8,
        backgroundColor: "#00C8E4",
        borderRadius: 40,
    },
    buttonStyleWhite: {
        width: "46%",
        marginEnd: 8,
        backgroundColor: "#E6E6E6",
        borderRadius: 40,
    },
    containerList: {
        width: "100%",
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#FFFFFF',
        padding: 8,
        width: "92%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    textBorder: {
        width: "50%",
        fontSize: 11,
        color: '#333333',
        fontWeight: 'bold',
        marginTop: 4,
        marginEnd: 4,
        marginStart: 4,
        borderRadius: 4,
        borderColor: '#E6E6E6',
        borderWidth: 1, padding: 4
    },
    //more Tabs
    rawContainer: {
        width: '90%',
        flexDirection: 'row',
    },
    icon: {
        width: 22,
        height: 22,
        marginEnd: 16
    },
    label: {
        width: "90%",
        fontSize: 18,
        color: '#4D4D4D',
        justifyContent: 'center'
    },
    view: {
        width: "90%",
        marginBottom: 16,
        marginTop: 16,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    button: {
        width: "50%",
        color: '#00C8E4',
        textAlign: 'right',
        borderWidth: 1,
        textAlign: 'center',
        margin: 8,
        borderColor: '#00C8E4',
        padding: 4,
        borderRadius: 4
    },

    //Mange Users
    buttonStyle: {
        width: "40%",
        color: '#00C8E4',
        borderColor: '#00C8E4',
        borderWidth: 1,
        marginStart: 16,
        marginEnd: 16,
        flexDirection: 'row',
        marginTop: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
        padding: 4,
        borderRadius: 100,
        textAlign: 'center'
    },
    buttonIcon: {
        width: 12,
        height: 12,
        marginEnd: 4
    }
});