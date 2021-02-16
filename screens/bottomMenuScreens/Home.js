import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, SafeAreaView, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";

class Home extends React.Component {
    state = {
        mainData: [
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba13242sdfsd',
                title: 'First Item',
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632234sdfsd',
                title: 'Second Item',
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e29d723234sdfsd',
                title: 'Third Item',
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e29d72423423sdfsd',
                title: 'Third Item',
            },
        ]
    }
    renderItem = ({ item }) => {
        const navigation = this.props.navigation;
        return (
            <TouchableOpacity onPress={() => navigation.navigate('BookingDetailsStack')}>
                <View style={styles.item}>
                    <View style={styles.buttonContainer}>
                        <Text style={{ width: "50%", color: '#999999', fontSize: 12 }}> Booking ID - 45763 </Text>
                        <Text style={{ width: "50%", color: '#999999', fontSize: 12, textAlign: 'right' }}> 15 August 2020, 05:30 PM </Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#E6E6E6',
                            marginTop: 8,
                            marginBottom: 4,
                            width: "100%",
                            borderBottomWidth: 1,
                        }}
                    />
                    <View style={styles.buttonContainer}>
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 100
                            }}
                            resizeMode={'cover'}
                            source={require('../../assets/customer_pic_2.png')}
                        />
                        <View style={{ width: '84%', marginStart: 10 }}>
                            <View style={styles.buttonContainer}>
                                <Text style={{ width: "50%", fontWeight: 'bold' }}> Alex Jenus </Text>
                                <Text style={{ width: "50%", textAlign: 'right', color: '#999999' }}> STATUS </Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Text style={{ width: "50%", color: '#999999' }}>+91  9458974385</Text>
                                <View style={{
                                    width: "56%",
                                    marginTop: 4,
                                    alignItems: 'flex-end'
                                }}>
                                    <TouchableOpacity style={{
                                        width: "60%",
                                        backgroundColor: "#FFB74D",
                                        borderRadius: 4,
                                    }}>
                                        <Text style={{
                                            textAlign: 'center',
                                            padding: 6,
                                            color: '#FFFFFF'
                                        }}> Requested </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={{ width: "50%", fontSize: 11, color: '#999999', marginTop: 10, marginStart: 4 }}> No. Of Service </Text>
                        <Text style={{ width: "50%", fontSize: 11, color: '#999999', marginTop: 10, marginStart: 4 }}> Total Amount </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.textBorder}> No. Of Service </Text>
                        <Text style={styles.textBorder}> 600.00 AED </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={{
                            width: "48%",
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginEnd: 4,
                        }}>
                            <Text style={{
                                width: "100%",
                                fontSize: 11,
                                color: '#FF3B30',
                                margin: 6,
                                borderRadius: 4,
                                borderColor: '#FF3B30',
                                borderWidth: 1,
                                padding: 7,
                                textAlign: 'center'
                            }}> Decline </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: "48%",
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                width: "100%",
                                fontSize: 11,
                                color: '#8CC63F',
                                margin: 6,
                                borderRadius: 4,
                                borderColor: '#8CC63F',
                                borderWidth: 1,
                                padding: 7,
                                textAlign: 'center'
                            }}> Accept </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={{
                            width: "48%",
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginEnd: 4,
                        }}>
                            <Text style={{
                                width: "100%",
                                fontSize: 11,
                                color: '#7A8DF9',
                                margin: 6,
                                borderRadius: 4,
                                borderColor: '#7A8DF9',
                                borderWidth: 1,
                                padding: 7,
                                textAlign: 'center'
                            }}> Complete </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: "48%",
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                            onPress={() => { navigation.navigate("BookingDetailsStack") }}
                        >
                            <Text style={{
                                width: "100%",
                                fontSize: 11,
                                color: '#00C8E4',
                                margin: 6,
                                borderRadius: 4,
                                borderColor: '#00C8E4',
                                borderWidth: 1,
                                padding: 7,
                                textAlign: 'center'
                            }}> View Details </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.textHeading}> My Booking </Text>
                        <Text style={{
                            width: '45%',
                            fontSize: 18,
                            textAlign: 'right',
                            marginStart: 8,
                            marginBottom: 8,
                            marginEnd: 16,
                            marginTop: 16,
                            fontWeight: 'bold'
                        }}> 30 </Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#E6E6E6',
                            marginBottom: 16,
                            width: "100%",
                            borderBottomWidth: 1,
                        }}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={{
                            width: "46%",
                            marginEnd: 8,
                            backgroundColor: "#00C8E4",
                            borderRadius: 40,
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                padding: 10,
                                color: '#FFFFFF'
                            }}> Current </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyleWhite}>
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                padding: 10,
                                color: '#444444'
                            }}> History </Text>
                        </TouchableOpacity>
                    </View>
                    <SafeAreaView style={styles.containerList}>
                        <FlatList
                            data={this.state.mainData}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                </View>
            </ScrollView>
        );
    }
}

export default Home;

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
        marginTop: 16,
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