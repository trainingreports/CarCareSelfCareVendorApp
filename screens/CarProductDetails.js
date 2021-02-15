
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, SafeAreaView, FlatList, Image, Rating, AirbnbRating, ImageBackground } from 'react-native';

class CarProductDetails extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="auto" />


                    <View style={styles.buttonContainer}>
                        <View style={{ width: '100%', height: 200 }}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    marginEnd: 2
                                }}
                                resizeMode={'cover'}
                                source={require('../assets/car_service_banner.png')}
                            />

                        </View>
                        <View style={styles.off}>
                            <ImageBackground style={styles.offBg} resizeMode={'cover'} source={require('../assets/off.png')}>
                                <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>15%</Text>
                                <Text style={{ color: '#ffffff', fontSize: 10 }}>OFF</Text>
                            </ImageBackground>
                        </View>

                       
                    </View>

                    <View style={{flexDirection:'row', width:'94%', justifyContent:'space-between',marginTop:20}}>
                            <Text style={{fontSize:18, fontWeight:'bold'}}>Basic Car Wash</Text>
                            <Image
                                style={{
                                    width:70,
                                    height:18,
                                    marginEnd: 2
                                }}
                                resizeMode={'cover'}
                                source={require('../assets/home_service.png')}
                            />
                        </View>

                        <View style={{flexDirection:'row', width:'94%', justifyContent:'space-between',marginTop:20}}>
                            <Text style={{fontSize:16, fontWeight:'bold', color:'#00C8E4'}}>25.00 AED</Text>
                            <Text style={{fontSize:10, color:'#999999'}}>2 Hrs 30 Min</Text>
                        </View>
                        
                      <View style={{width:'94%'}}>
                      <Text style={styles.borderBottam}></Text>
                        <Text style={[styles.aed, { paddingVertical: 10, width: '100%' }]}>DESCRIPTION</Text>
                        <Text style={styles.textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                        <Text style={styles.textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

                      </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => navigation.goback()//navigation.dispatch(StackActions.pop())
                        }
                            style={{
                                width: "50%",
                                padding: 7,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Text style={{
                                width: "49%",
                                fontSize: 14,
                                color: '#FF3B30',
                                margin: 6,
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}> DELETE </Text>

                        </TouchableOpacity>
                        <View
                            style={{
                                backgroundColor: '#909090',
                                height: "100%",
                                width: 1,
                            }}
                        />
                        <TouchableOpacity onPress={() => navigation.goback()}//navigation.dispatch(StackActions.pop())}
                            style={{
                                width: "49%",
                                padding: 7,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Text style={{
                                width: "50%",
                                fontSize: 14,
                                color: '#8CC63F',
                                margin: 6,
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}> EDIT </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default CarProductDetails;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 66,
        height: 58,
    },
    buttonContainer: {
        width: '94%',
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
        fontWeight: 'bold'
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
    off: {
        position: 'absolute',
        bottom: 15,
        marginLeft: 15,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        marginStart: 20,
        padding: 10
    },
    offBg: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4
    },
    borderBottam: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
        width: '100%'
    },

 aed: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#666666',
        //width:'100%',
        textAlign: 'left'
    },
 textStyle: {
        fontSize: 16,
        color: '#808080',
        paddingBottom: 15
    },
});
