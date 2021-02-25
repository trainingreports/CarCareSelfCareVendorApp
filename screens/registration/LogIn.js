import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  ToastAndroid
} from "react-native";
import axios from "axios";
import FormData from "form-data";
import ProgressDialog from "react-native-progress-dialog";
import AsyncStorage from "@react-native-community/async-storage";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      email: "",
      password: "",
      wait: false,
      user: null
    };
  }

  signInAsync = async () => {
    const result = await Google.logInAsync({
      androidClientId:
        "766262472004-8ucj60k0gsanfmjm5snjhfdu3b9qi2a4.apps.googleusercontent.com",
      scopes: ["profile", "email"],
      androidStandaloneAppClientId:
        "766262472004-8ucj60k0gsanfmjm5snjhfdu3b9qi2a4.apps.googleusercontent.com"
    });

    if (result.type === "success") {
      console.log("USER_INFO", result.user);
      const user = {
        email: result.user.email,
        name: result.user.name,
        google_id: result.user.id,
        fb_id: "",
        type: "gmail"
      };

      var formdata = new FormData();
      formdata.append("fb_id", user.fb_id);
      formdata.append("social_type", user.type);
      formdata.append("gmail_id", user.google_id);
        formdata.append("role", "2");

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch("https://xionex.in/CarCare/api/v1/social-login", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            if(result.status){
              this.storeData(result.data.id, result.data.vertical);
            }else {
              this.props.navigation.navigate("SignUp", {
                social: true,
                user: user
              });
            }
          })
          .catch(error => console.log("error", error));
    }
  };

  storeData = async (id, vertical) => {
    try {
      await AsyncStorage.setItem("id", String(id));
      if (vertical === "Self-care") {
        await AsyncStorage.setItem("self", JSON.stringify(true));
        this.props.navigation.navigate("App");
        this.setState({ wait: false });
      } else if (vertical === "Car-care") {
        await AsyncStorage.setItem("self", JSON.stringify(false));
        this.props.navigation.navigate("App");
        this.setState({ wait: false });
      }
    } catch (e) {
      alert("Something went wrong");
    }
  };

  validateEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    if (!email.length) {
      alert("Email Empty.");
    } else if (!this.validateEmail(email)) {
      alert("Invalid Email Format.");
    } else if (!password.length) {
      alert("Password Empty.");
    } else if (password.length < 6) {
      alert("Password must be of 6 characters.");
    } else {
      this.setState({ wait: true });
      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch("https://xionex.in/CarCare/api/v1/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if (result.status) {
            this.storeData(result.data.id, result.data.vertical);
          }else{
            ToastAndroid.show('Invalid Credentials',3000)
            this.setState({ wait: false });
          }
        })
        .catch(error => {
          console.log("error", error);
          alert("Something went wrong");
          this.setState({ wait: false });
        });
    }
  };

  signInWithFb = async () => {
    try {
      await Facebook.initializeAsync("842471036316892", "Self care");
      const result = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"]
      });

      if (result.type === "success") {
        
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,email,birthday&access_token=${result.token}`
        );

        const res = await response.json();
       
        const user = {
          email: res.email,
          name: res.name,
          google_id: "",
          fb_id: res.id,
          type: "facebook"
        };

        var formdata = new FormData();
        formdata.append("fb_id", user.fb_id);
        formdata.append("social_type", user.type);
        formdata.append("gmail_id", user.google_id);
        formdata.append("role", "2");

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch("https://xionex.in/CarCare/api/v1/social-login", requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status){
              this.storeData(result.data.id, result.data.vertical);
            }else {
              this.props.navigation.navigate("SignUp", {
                social: true,
                user: user
              });
            }
          })
          .catch(error => console.log("error", error));
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode={"cover"}
        source={require("../../assets/bg.png")}
      >
        <ScrollView>
          <View style={styles.container}>
            <ProgressDialog visible={this.state.wait} />
            <StatusBar style="auto" />
            <Image
              style={styles.logo}
              resizeMode={"cover"}
              source={require("../../assets/app-icon.jpg")}
            />

            <Text style={styles.textHeading}>Sign In</Text>

            <Text style={styles.textLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"
              onChangeText={text => this.setState({ email: text })}
            />

            <Text style={styles.textLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={text => this.setState({ password: text })}
            />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ForgetPassword");
                //navigation.navigate("CarServiceDetailsStack")
              }}
            >
              <Text style={styles.textForgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.buttonSignIn}>
              <Button
                title="Sign In"
                color="#00C8E4"
                onPress={() => {
                  this.handleSubmit();
                }}
              />
            </View>

            <Text style={styles.textSocialLogIn}>
              Sign in with Social Account
            </Text>

            <View style={styles.buttonContainer}>
              <View style={styles.socialButtonContainer}>
                <TouchableOpacity
                  onPress={this.signInWithFb}
                  style={styles.centerAlign}
                >
                  <Image
                    style={styles.socialIcon}
                    source={require("../../assets/2-Login/fb.png")}
                  />
                  <Text style={[styles.textButtonSocial, { color: "#FFFFFF" }]}>
                    Facebook
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={[
                  styles.socialButtonContainer,
                  { backgroundColor: "#FFFFFF" }
                ]}
              >
                <TouchableOpacity
                  onPress={this.signInAsync}
                  style={styles.centerAlign}
                >
                  <Image
                    style={styles.socialIcon}
                    source={require("../../assets/2-Login/goolge.png")}
                  />
                  <Text style={styles.textButtonSocial}>Google</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.textLogInwithSocail}>
              Don't have an account?
            </Text>

            <View style={styles.buttonSignUp}>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
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
    alignItems: "center",
    justifyContent: "center"
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
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  textHeading: {
    fontSize: 18,
    marginStart: 16,
    marginTop: 8,
    fontWeight: "bold"
  },
  textButtonSocial: {
    textAlign: "center",
    marginStart: 8
  },
  socialButtonContainer: {
    width: "38%",
    margin: 8,
    backgroundColor: "#3B5998",
    padding: 10,
    borderRadius: 4
  },
  textLabel: {
    textAlign: "left",
    marginStart: 8,
    marginBottom: 8,
    color: "#4D4D4D",
    marginTop: 16,
    fontWeight: "bold",
    width: "80%"
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
    borderRadius: 4
  },
  centerAlign: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: "80%",
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#FFFFFF"
  },
  textSignUp: {
    padding: 10,
    textAlign: "center",
    fontWeight: "500",
    color: "#00C8E4"
  },
  buttonSignIn: {
    width: "80%",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: "#00C8E4",
    borderRadius: 4
  },
  buttonStyle: {
    width: "46%",
    marginEnd: 8,
    backgroundColor: "#00C8E4",
    borderRadius: 40
  },
  buttonStyleWhite: {
    width: "46%",
    marginEnd: 8,
    backgroundColor: "#E6E6E6",
    borderRadius: 40
  },
  containerList: {
    width: "100%",
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 8,
    width: "92%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  textBorder: {
    width: "50%",
    fontSize: 11,
    color: "#333333",
    fontWeight: "bold",
    marginTop: 4,
    marginEnd: 4,
    marginStart: 4,
    borderRadius: 4,
    borderColor: "#E6E6E6",
    borderWidth: 1,
    padding: 4
  },
  textForgotPassword: {
    marginBottom: 16,
    marginTop: 16,
    color: "#4D4D4D",
    fontWeight: "bold"
  }
});
