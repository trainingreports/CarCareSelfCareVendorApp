
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import axios from "axios";
import FormData from "form-data";
import ProgressDialog from 'react-native-progress-dialog';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      email: "",
      password: ""
    }
  }

  componentDidMount() {
  }

  handleSubmit = () => {
    var data = new FormData();
    data.append('email', this.state.email);
    data.append('password', this.state.password);
    var BASE_URl = 'https://xionex.in/CarCare/';
    <ProgressDialog visible={this.state.visible} />
    var config = {
      method: 'post',
      url: BASE_URl + 'login',
      data: data
    };
    var me = this;
    axios(config)
      .then(function (response) {
        if (response.data) {
          if (response.data.status) {
            me.props.navigation.navigate("App");
          } else {
            alert(response.data.message);
          }
        } else {
          alert("Something went wrong!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground style={{ flex: 1 }} resizeMode={'cover'} source={require('../../assets/bg.png')}>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <Image
              style={styles.logo}
              resizeMode={'cover'}
              source={require('../../assets/app-icon.jpg')}
            />

            <Text style={styles.textHeading}>Sign In</Text>

            <Text style={styles.textLabel}>Email</Text>
            <TextInput style={styles.textInput}
              placeholder="Email Address"
              onChangeText={text => this.setState({ email: text })}
            />

            <Text style={styles.textLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={text => this.setState({ password: text })}
            />

            <TouchableOpacity onPress={() => { 
               navigation.navigate("ForgetPassword")
              //navigation.navigate("CarServiceDetailsStack")
             }}>
              <Text style={styles.textForgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.buttonSignIn}>
              <Button title="Sign In" color="#00C8E4"
                onPress={() => { 
                  // this.handleSubmit() 
                  navigation.navigate("App")
                }}
              />
            </View>

            <Text style={styles.textSocialLogIn}>Sign in with Social Account</Text>

            <View style={styles.buttonContainer}>
              <View style={styles.socialButtonContainer}>
                <TouchableOpacity style={styles.centerAlign}>
                  <Image style={styles.socialIcon} source={require('../../assets/2-Login/fb.png')} />
                  <Text style={[styles.textButtonSocial, { color: '#FFFFFF' }]}>Facebook</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.socialButtonContainer, { backgroundColor: '#FFFFFF' }]}>
                <TouchableOpacity style={styles.centerAlign}>
                  <Image style={styles.socialIcon} source={require('../../assets/2-Login/goolge.png')} />
                  <Text style={styles.textButtonSocial}>Google</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.textLogInwithSocail}>Don't have an account?</Text>

            <View style={styles.buttonSignUp}>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.textSignUp}>Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 42
  },
  socialIcon: {
    width: 16,
    height: 16
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  textHeading: {
    fontSize: 18,
    marginStart: 16,
    marginTop: 8,
    fontWeight: 'bold'
  },
  textButtonSocial: {
    textAlign: 'center',
    marginStart: 8
  },
  socialButtonContainer: {
    width: "38%",
    margin: 8,
    backgroundColor: "#3B5998",
    padding: 10,
    borderRadius: 4,
  },
  textLabel: {
    textAlign: 'left',
    marginStart: 8,
    marginBottom: 8,
    color: '#4D4D4D',
    marginTop: 16,
    fontWeight: 'bold',
    width: "80%",
  },
  textSocialLogIn: {
    fontSize: 16,
    marginBottom: 16,
    color: "#808080"
  },
  textLogInwithSocail: {
    fontSize: 16,
    marginBottom: 16,
    marginTop: 42,
    color: "#1A1A1A"
  },
  buttonSignUp: {
    width: "80%",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 8,
    marginBottom: 50,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  centerAlign: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: "80%",
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  textSignUp: {
    padding: 10,
    textAlign: 'center',
    fontWeight: '500',
    color: '#00C8E4'
  },
  buttonSignIn: {
    width: "80%",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: "#00C8E4",
    borderRadius: 4,
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
  textForgotPassword: {
    marginBottom: 16,
    marginTop: 16,
    color: '#4D4D4D',
    fontWeight: 'bold',
  },
});