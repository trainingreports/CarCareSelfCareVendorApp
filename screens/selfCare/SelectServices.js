import React from 'react';

export class Home extends Component {
    render() {
        return (
            <ImageBackground
                style={{
                    width: "100%",
                    height: "100%"
                }}
                resizeMode={'cover'}
                source={require('./assets/bg.png')}
            >
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
                                marginBottom: 8,
                                marginTop: 16,
                                fontWeight: 'bold'
                            }}>Select Service</Text>

                        <ImageBackground
                            style={{
                                width: "94%",
                                height: 150,
                                marginTop: 26,
                                borderRadius: 8
                            }}
                            resizeMode={'cover'}
                            source={require('./assets/pic_self_care.png')}
                        >
                            <View style={{
                                alignItems: 'center',
                                height: "100%",
                                marginStart: 16,
                                flexDirection: "row",
                            }}>
                                <CheckBox
                                    style={{
                                        width: 40,
                                        height: 40,
                                        padding: 10
                                    }}
                                // onClick={() => {
                                //   this.setState({
                                //     isChecked: !this.state.isChecked
                                //   })
                                // }}
                                // isChecked={this.state.isChecked}
                                // leftText={"CheckBox"}
                                />
                                <Text style={{
                                    color: "#FFF"
                                }}>Self Care</Text>
                            </View>
                        </ImageBackground>

                        <ImageBackground
                            style={{
                                width: "94%",
                                height: 150,
                                marginTop: 26,
                                borderRadius: 8
                            }}
                            resizeMode={'cover'}
                            source={require('./assets/pic_car_care.png')}
                        >
                            <View style={{
                                alignItems: 'center',
                                height: "100%",
                                marginStart: 16,
                                flexDirection: "row",
                            }}>
                                <CheckBox
                                    style={{
                                        width: 40,
                                        height: 40,
                                        padding: 10
                                    }}
                                // onClick={() => {
                                //   this.setState({
                                //     isChecked: !this.state.isChecked
                                //   })
                                // }}
                                // isChecked={this.state.isChecked}
                                // leftText={"CheckBox"}
                                />
                                <Text style={{
                                    color: "#FFF"
                                }}>Car Care</Text>
                            </View>
                        </ImageBackground>

                        <View style={[{
                            width: "94%",
                            marginStart: 10,
                            marginEnd: 10,
                            marginTop: 24,
                            marginBottom: 56,
                            backgroundColor: "#FFFFFF",
                            borderRadius: 4,
                        }]}>
                            <Button
                                title="Continue"
                                color="#00C8E4"
                                onPress={() =>
                                    navigation.navigate('ForgotPassword', { name: 'Jane' })
                                }
                            >
                                <Text style={{
                                    color: "#444"
                                }}></Text>
                            </Button>
                        </View>
                        <StatusBar style="auto" />
                    </View>
                </ScrollView>
            </ImageBackground >

        );
    }
}