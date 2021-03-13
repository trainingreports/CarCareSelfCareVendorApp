import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Picker,
  ToastAndroid
} from "react-native";
import FormData from "form-data";
import {URL} from '../../DomainConstant';
import ProgressDialog from "react-native-progress-dialog";
import AsyncStorage from "@react-native-community/async-storage";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      businessName: "",
      email: "",
      mobileNumber: "",
      vertical: "",
      category: "",
      subCategory: "",
      place: "",
      cr_number: "",
      city: "",
      country: "",
      password: "",
      categoryList: [],
      subCategoryList: [],
      wait: false,
      google_id: "",
      fb_id: "",
      type: ""
    };
  }
  componentDidMount() {
    if (this.props.route.params?.social) {
      const {
        email,
        name,
        google_id,
        fb_id,
        type
      } = this.props.route.params.user;
      this.setState({
        name: name,
        email: email,
        google_id: google_id,
        fb_id: fb_id,
        type: type
      });
    }

    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(`${URL}clinic-type`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status) {
          this.setState({ categoryList: result.data });
        }
      })
      .catch(error => console.log("error", error));
  }
  submitHandle = () => {
    const {
      name,
      businessName,
      email,
      mobileNumber,
      vertical,
      category,
      subCategory,
      place,
      cr_number,
      city,
      country,
      password,
      google_id,
      fb_id,
      type
    } = this.state;
    if (name === "") {
      alert("please enter the name");
    } else if (businessName === "") {
      alert("please enter the business name");
    } else if (email === "") {
      alert("please enter the email");
    } else if (mobileNumber === "") {
      alert("please enter the mobileNumber");
    } else if (vertical === "") {
      alert("please enter the vertical");
    } else if (category === "") {
      alert("please enter the Category");
    } else if (subCategory === "") {
      alert("please enter the Subcategory");
    } else if (cr_number === "") {
      alert("please enter the cr_number");
    } else if (city === "") {
      alert("please enter the city");
    } else if (country === "") {
      alert("please enter the country");
    } else if (password === "") {
      alert("please enter the password");
    } else {
      this.setState({ wait: true });
      var formdata = new FormData();
      formdata.append("name", name);
      formdata.append("business", businessName);
      formdata.append("email", email);
      formdata.append("phone", mobileNumber);
      formdata.append("vertical", vertical);
      formdata.append("place", place);
      formdata.append("category", category);
      formdata.append("subcategory", subCategory);
      formdata.append("cr_no", cr_number);
      formdata.append("city", city);
      formdata.append("country", country);
      formdata.append("password", password);
      formdata.append("fb_id", fb_id);
      formdata.append("gmail_id", google_id);
      formdata.append("social_type", type);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch("`${URL}sign-up", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if (result.status) {
            this.setState({ wait: false });
            ToastAndroid.show(result.message, 2000);
            this.props.navigation.navigate("Login");
          } else {
            this.setState({ wait: false });
            alert(result.message);
          }
        })
        .catch(error => {
          this.setState({ wait: false });
          console.log("error", error);
        });
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
  signInAsync = async () => {
    this.setState({wait:true})
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

        fetch(`${URL}social-login`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            if(result.status){
              this.storeData(result.data.id, result.data.vertical);
            }else {
              this.setState({
                name: user.name,
                email: user.email,
                google_id: user.google_id,
                fb_id: user.fb_id,
                type: user.type
              });
              this.setState({wait:false})
            }
          })
          .catch(error => {
            this.setState({wait:false})
            console.log("error", error)});
    }
    this.setState({wait:false})
  };
  signInWithFb = async () => {
    this.setState({wait:true})
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

        fetch(`${URL}social-login`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status){
              this.storeData(result.data.id, result.data.vertical);
            }else {
              this.setState({
                name: user.name,
                email: user.email,
                google_id: user.google_id,
                fb_id: user.fb_id,
                type: user.type
              });
            }
          })
          .catch(error => console.log("error", error));
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
    this.setState({wait:false})
  };

  render() {
    const navigation = this.props.navigation;

    return (
      <ImageBackground
        style={{
          width: "100%",
          height: "100%"
        }}
        resizeMode={"cover"}
        source={require("../../assets/imgs/login/bg.png")}
      >
        <ScrollView>
          <View style={styles.container}>
            <ProgressDialog visible={this.state.wait} />
            <Text style={styles.textHeading}> Sign Up </Text>
            <Text style={styles.textLabel}> Name </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Name"
              value={this.state.name}
              onChangeText={text => this.setState({ name: text })}
            />
            <Text style={styles.textLabel}> Business Name </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Business Name"
              onChangeText={text => this.setState({ businessName: text })}
            />
            <Text style={styles.textLabel}> Email </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Email"
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Text style={styles.textLabel}> Mobile Number </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Mobile Number"
              onChangeText={text => this.setState({ mobileNumber: text })}
            />

            <Text style={styles.textLabel}> Vertical </Text>
            <View
              style={{
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "gray",
                width: "94%",
                backgroundColor: "#ffffff"
              }}
            >
              <Picker
                style={{ height: 36 }}
                mode="dropdown"
                selectedValue={this.state.vertical}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ vertical: itemValue })
                }
              >
                <Picker.Item
                  label="Select"
                  color="#B3B3B3"
                  fontSize="10"
                  value="Select"
                />
                <Picker.Item
                  label="Self-care"
                  color="#B3B3B3"
                  fontSize="10"
                  value="Self-care"
                />
                <Picker.Item
                  label="Car-care"
                  color="#B3B3B3"
                  fontSize="10"
                  value="Car-care"
                />
              </Picker>
            </View>

            <Text style={styles.textLabel}> Category </Text>
            <View
              style={{
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "gray",
                width: "94%",
                backgroundColor: "#ffffff"
              }}
            >
              <Picker
                style={{ height: 36 }}
                mode="dropdown"
                selectedValue={this.state.category}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({ category: itemValue });
                  var formdata = new FormData();
                  formdata.append("clinic_id", itemValue);

                  var requestOptions = {
                    method: "POST",
                    body: formdata,
                    redirect: "follow"
                  };

                  fetch(
                    "`${URL}sub-category",
                    requestOptions
                  )
                    .then(response => response.json())
                    .then(result => {
                      if (result.status) {
                        this.setState({ subCategoryList: result.data });
                      }
                    })
                    .catch(error => console.log("error", error));
                }}
              >
                {this.state.categoryList.map((item, i) => {
                  return (
                    <Picker.Item
                      key={i}
                      label={item.title}
                      color="#B3B3B3"
                      fontSize="10"
                      value={item.id}
                    />
                  );
                })}
              </Picker>
            </View>

            <Text style={styles.textLabel}> SubCategory </Text>
            <View
              style={{
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "gray",
                width: "94%",
                backgroundColor: "#ffffff"
              }}
            >
              <Picker
                style={{ height: 36 }}
                mode="dropdown"
                selectedValue={this.state.subCategory}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ subCategory: itemValue })
                }
              >
                {this.state.subCategoryList.map((item, i) => {
                  return (
                    <Picker.Item
                      key={i}
                      label={item.title}
                      color="#B3B3B3"
                      fontSize="10"
                      value={item.id}
                    />
                  );
                })}
              </Picker>
            </View>

            <Text style={styles.textLabel}> Select Place </Text>
            <View
              style={{
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "gray",
                width: "94%",
                backgroundColor: "#ffffff"
              }}
            >
              <Picker
                style={{ height: 36 }}
                mode="dropdown"
                selectedValue={this.state.place}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ place: itemValue })
                }
              >
                <Picker.Item
                  label="Select Place"
                  color="#B3B3B3"
                  fontSize="10"
                  value="Select Place"
                />
                <Picker.Item
                  label="Home"
                  color="#B3B3B3"
                  fontSize="10"
                  value="Home"
                />
                <Picker.Item
                  label="Shop"
                  color="#B3B3B3"
                  fontSize="10"
                  value="Shop"
                />
                <Picker.Item
                  label="Both"
                  color="#B3B3B3"
                  fontSize="10"
                  value="Both"
                />
              </Picker>
            </View>
            <Text style={styles.textLabel}> CR Number </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter CR Number"
              onChangeText={text => this.setState({ cr_number: text })}
            />

            <Text style={styles.textLabel}> City </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter City"
              onChangeText={text => this.setState({ city: text })}
            />

            <Text style={styles.textLabel}> Country </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Country"
              onChangeText={text => this.setState({ country: text })}
            />

            <Text style={styles.textLabel}> Passowrd </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Passowrd"
              onChangeText={text => this.setState({ password: text })}
            />

            <Text
              style={{
                fontSize: 13,
                marginBottom: 2,
                marginTop: 8,
                color: "#444",
                fontWeight: "bold"
              }}
            >
              I agree to
              <Text style={{ color: "#00C8E4" }}> Terms & Conditions</Text> of
              Self Care & Car Care
            </Text>

            <View
              style={[
                {
                  width: "94%",
                  marginStart: 10,
                  marginEnd: 10,
                  marginTop: 24,
                  marginBottom: 16,
                  backgroundColor: "#00C8E4",
                  borderRadius: 6
                }
              ]}
            >
              <Button
                title="Sign Up"
                color="#00C8E4"
                onPress={() => this.submitHandle()}
              />
            </View>

            <Text
              style={{
                fontSize: 16,
                marginBottom: 16,
                color: "#808080"
              }}
            >
              Sign in with Social Account
            </Text>

            <View style={styles.buttonContainer}>
              <View style={styles.socialButtonContainer}>
                <TouchableOpacity
                 onPress={this.signInWithFb}
                style={styles.centerAlign}>
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
                style={styles.centerAlign}>
                  <Image
                    style={styles.socialIcon}
                    source={require("../../assets/2-Login/goolge.png")}
                  />
                  <Text style={styles.textButtonSocial}>Google</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={{
                fontSize: 16,
                marginBottom: 48,
                marginTop: 32,
                color: "#1A1A1A"
              }}
            >
              Already have an account?
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={{ color: "#00C8E4" }}> Sign In </Text>
              </TouchableOpacity>
            </Text>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 66,
    height: 58
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
    marginBottom: 16,
    marginTop: 42,
    fontWeight: "bold"
  },
  textLabel: {
    textAlign: "left",
    marginStart: 8,
    marginBottom: 8,
    color: "#4D4D4D",
    marginTop: 16,
    fontWeight: "bold",
    width: "94%"
  },
  textInput: {
    height: 40,
    width: "94%",
    padding: 10,
    borderRadius: 4,
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    borderWidth: 1
  },
  textButtonSocial: {
    textAlign: "center",
    marginStart: 8
  },
  socialButtonContainer: {
    width: "44%",
    margin: 8,
    backgroundColor: "#3B5998",
    padding: 10,
    borderRadius: 4
  },
  centerAlign: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
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
  }
});

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: "100%",
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 66,
//     height: 58,
//   },
//   buttonContainer: {
//     width: "100%",
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   checkboxContainer: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   textHeading: {
//     fontSize: 18,
//     marginBottom: 16,
//     marginTop: 32,
//     fontWeight: 'bold'
//   },
//   textLabel: {
//     textAlign: 'left',
//     marginStart: 8,
//     marginBottom: 8,
//     color: '#4D4D4D',
//     marginTop: 16,
//     fontWeight: 'bold',
//     width: "94%",
//   },
//   textInput: {
//     height: 40,
//     width: "94%",
//     padding: 10,
//     borderRadius: 4,
//     borderColor: 'gray',
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//   }
// });
