import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

class HomeOffer extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>

                    <Text style={styles.textHeading}>Manage Offer </Text>
                    <View style={{
                        width: "94%",
                        marginStart: 10,
                        marginEnd: 10,
                        marginBottom: 16,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 4,
                    }}>
                        <TouchableOpacity onPress={() =>navigation.navigate("OfferCodeStack")}>
                            <Text style={{
                                textAlign: 'center',
                                padding: 10,
                                color: '#00C8E4'
                            }}> Generate Offer Code </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: '94%',
                        borderRadius: 4,
                        shadowColor: "#CCCCCC",
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                            height: 1,
                            width: 1
                        },
                        backgroundColor: '#FFFFFF',
                        margin: 10
                    }}>
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderTopEndRadius: 4,
                            borderTopStartRadius: 4,
                            padding: 12,
                            backgroundColor: '#00C8E4',
                            justifyContent: 'center',
                        }}>
                            <View style={{ width: '46%', marginStart: 10 }}>
                                <Text style={{ width: "80%", color: '#FFFFFF' }}>OFFER CODE </Text>
                                <Text style={{ width: "80%", fontWeight: 'bold', color: '#FFFFFF' }}>DENTAL 151</Text>
                            </View>
                            <View style={{
                                width: '40%',
                                marginStart: 30,
                                marginEnd: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF',
                                borderRadius: 24
                            }}>
                                <Image
                                    style={{
                                        width: 24,
                                        height: 24,
                                        marginEnd: 8
                                    }}
                                    resizeMode={'contain'}
                                    source={require('../../assets/12.1-12.2-Offer/gift_icon.png')}
                                />
                                <Text style={{ fontSize: 34, fontWeight: 'bold', color: '#00C8E4' }}>50</Text>
                                <Text style={{ width: '20%', fontSize: 11, fontWeight: 'bold', color: '#00C8E4', marginStart: 8 }}>% OFF</Text>
                            </View>

                        </View>

                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            paddingStart: 10,
                            paddingEnd: 10,
                            paddingTop: 10
                        }}>
                            <Text style={{ width: "50%", color: '#999999' }}> NO. OF USER </Text>
                            <Text style={{ width: "50%", color: '#999999' }}> VELIDITY </Text>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', paddingStart: 10, paddingEnd: 10 }}>
                            <Text style={{ width: "50%", color: '#333333', fontWeight: 'bold' }}> 150 </Text>
                            <Text style={{ width: "50%", color: '#333333', fontWeight: 'bold' }}> 15 Nov 2020 </Text>
                        </View>

                        <View style={{ width: '100%', flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() =>navigation.navigate("OfferCodeStack")}>
                                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <Image
                                        style={styles.buttonIcon}
                                        resizeMode={'contain'}
                                        source={require('../../assets/12.1-12.2-Offer/edit001.png')}
                                    />
                                    <Text style={{ color: '#00C8E4' }} > Edit </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <Image
                                        style={styles.buttonIcon}
                                        resizeMode={'contain'}
                                        source={require('../../assets/12.1-12.2-Offer/delete001.png')}
                                    />
                                    <Text style={{ color: '#00C8E4' }} > Remove </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

export default HomeOffer;

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