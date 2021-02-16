import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

class HomeMain extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{
                        width: '100%',
                        height: 120,
                        backgroundColor: '#00C8E4'
                    }} />
                    <Image style={{
                        width: 140,
                        height: 140,
                        marginTop: -90,
                        borderWidth: 4,
                        marginBottom: 16,
                        backgroundColor: '#000000',
                        borderRadius: 100,
                        borderColor: '#FFFFFF'
                    }} resizeMode={'contain'} source={require('../../assets/13.1-4-6-More/vendor_logo.png')} />

                    <View style={styles.rawContainer}>
                        <Text style={{
                            width: "50%",
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#1A1A1A',
                            justifyContent: 'center'
                        }}>Car Wash</Text>

                        <Text style={{
                            width: "50%",
                            textAlign: 'right',
                            color: '#FF3B30',
                            icon: 'more',
                            justifyContent: 'center'
                        }}>Unverified Account</Text>

                    </View>
                    <Text style={{
                        width: "90%",
                        fontSize: 18,
                        color: '#B3B3B3',
                        justifyContent: 'center'
                    }}>Dubai - UAE</Text>
                    <View style={styles.rawContainer}>
                        <Text style={{
                            width: "80%",
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#1A1A1A',
                            justifyContent: 'center'
                        }}>carwash@gmail.com</Text>

                        <Text style={{
                            width: "19%",
                            textAlign: 'right',
                            color: '#00C8E4',
                            icon: 'more',
                            fontSize: 12,
                            justifyContent: 'center'
                        }}>Verify</Text>
                    </View>

                    <View style={{ width: '92%', flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={[styles.button, style = { justifyContent: 'center', alignItems: 'center' }]}
                            onPress={() => navigation.navigate('Profile')} >
                            <Text style={{ color: '#00C8E4' }}> View Profile </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, style = { justifyContent: 'center', alignItems: 'center' }]}
                            onPress={() => navigation.navigate('ProfileEdit')} >
                            <Text style={{ color: '#00C8E4' }}> Edit Profile   </Text>
                        </TouchableOpacity>
                    </View>

                    {/* navigation menu */}
                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/13.1-4-6-More/add_emp_availability.png')} />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("App", { screen: "EmpAvaility" })}>
                            <Text style={styles.label}>Add Employee & Availability</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/13.1-4-6-More/bank_account.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('AddBankAccountStack')}>
                            <Text style={styles.label}>Bank Account</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/13.1-4-6-More/payment_history.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('PaymentActivity1')}>
                            <Text style={styles.label}>Payment Activity</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/13.1-4-6-More/notifications.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('NotificationStack')}>
                            <Text style={styles.label}>Notificatios</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/13.1-4-6-More/settings.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('SettingStack')}>
                            <Text style={styles.label}>Settings</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/13.1-4-6-More/terms_services.png')} />
                        <TouchableOpacity style={styles.label}
                        //onPress={() => navigation.navigate('Setting')}
                        >
                            <Text style={styles.label}>Terms of Services</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/13.1-4-6-More/rate_us.png')} />
                        <TouchableOpacity style={styles.label}
                        //onPress={() => navigation.navigate('Setting')}
                        >
                            <Text style={styles.label}>Rate Us</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/13.1-4-6-More/help_feedback.png')} />
                        <TouchableOpacity style={styles.label}
                        //onPress={() => navigation.navigate('Setting')}
                        >
                            <Text style={styles.label}>Help & Feedback</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/13.1-4-6-More/signout.png')} />
                        <TouchableOpacity style={styles.label}
                        //onPress={() => navigation.navigate('Setting')}
                        >
                            <Text style={styles.label}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                </View>
            </ScrollView>
        );
    }
}

export default HomeMain;

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
        margin: 10,
        borderColor: '#00C8E4',
        padding: 8,
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
    },
    rawContainer: {
        width: '90%',
        flexDirection: 'row',
    },
});