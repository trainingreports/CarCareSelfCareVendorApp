import React from 'react';

export class ResetPassword extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.container}>
                        <Image
                            style={{
                                width: 140,
                                height: 140,
                                marginTop: 26
                            }}
                            resizeMode={'cover'}
                            source={require('./assets/app-icon.jpg')}
                        />
                        <Text
                            style={{
                                fontSize: 18,
                                marginBottom: 16,
                                marginTop: 16,
                                fontWeight: 'bold'
                            }}>Reset Password?</Text>
                        <Text
                            style={{
                                textAlign: 'left',
                                marginStart: 8,
                                marginBottom: 8,
                                color: '#4D4D4D',
                                marginTop: 16,
                                fontWeight: 'bold',
                                width: "94%",
                            }}
                        >New Password</Text>
                        <TextInput
                            style={{
                                height: 40,
                                width: "94%",
                                padding: 10,
                                borderRadius: 4,
                                borderColor: 'gray',
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                            }}
                            placeholder="Enter New Password"
                            defaultValue=""
                        />
                        <Text
                            style={{
                                textAlign: 'left',
                                marginStart: 8,
                                marginBottom: 8,
                                color: '#4D4D4D',
                                marginTop: 16,
                                fontWeight: 'bold',
                                width: "94%",
                            }}
                        >Confirm Password</Text>
                        <TextInput
                            style={{
                                height: 40,
                                width: "94%",
                                padding: 10,
                                borderRadius: 4,
                                borderColor: 'gray',
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                            }}
                            placeholder="Enter Confirm Password"
                            defaultValue=""
                        />
                        <View style={[{
                            width: "94%",
                            marginStart: 10,
                            marginEnd: 10,
                            marginTop: 24,
                            marginBottom: 16,
                            backgroundColor: "#00C8E4",
                            borderRadius: 4,
                        }]}>
                            <Button
                                title="Update Password"
                                color="#00C8E4"
                                onPress={() =>
                                    navigation.navigate('ForgotPassword', { name: 'Jane' })
                                }
                            />
                        </View>

                        <StatusBar style="auto" />
                    </View>

                </ScrollView>
            </View>

        );
    }
}