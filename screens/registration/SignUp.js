import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
//import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  Rating,
  AirbnbRating,
  Picker
} from "react-native";
import axios from "axios";
import FormData from "form-data";

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
      password: ""
    };
  }
  storeData = async respone => {
    try {
      await AsyncStorage.setItem("id", String(respone));
      this.props.navigation.navigate("App");
    } catch (e) {
      Alert.alert("Something went wrong");
    }
  };
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
      password
    } = this.state;
    if (this.state.name == "") {
      //this.state.name.error = "please ender the name";
      alert("please ender the name");
    } else if (this.state.businessName == "") {
      alert("please ender the business name");
    } else if (this.state.email == "") {
      alert("please ender the email");
    } else if (this.state.mobileNumber == "") {
      alert("please ender the mobileNumber");
    } else if (this.state.vertical == "") {
      alert("please ender the vertical");
    } else if (this.state.cr_number == "") {
      alert("please ender the cr_number");
    } else if (this.state.city == "") {
      alert("please ender the city");
    } else if (this.state.country == "") {
      alert("please ender the country");
    } else if (this.state.password == "") {
      alert("please ender the password");
    } else {
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

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch("https://xionex.in/CarCare/api/v1/sign-up", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            alert(result.message);
          } else {
            alert(result.message);
          }
        })
        .catch(error => console.log("error", error));
    }
  };

  render() {
    const navigation = this.props.navigation;
    //const [selectedValue, setSelectedValue] = useState("java");
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
            <Text style={styles.textHeading}> Sign Up </Text>
            <Text style={styles.textLabel}> Name </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Name"
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
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ category: itemValue })
                }
              >
                <Picker.Item
                  label="Select Category"
                  color="#B3B3B3"
                  fontSize="10"
                  value="Select Category"
                />
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
                <Picker.Item
                  label="Select"
                  color="#B3B3B3"
                  fontSize="10"
                  value="Select SubCategory"
                />
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
                <TouchableOpacity style={styles.centerAlign}>
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
                <TouchableOpacity style={styles.centerAlign}>
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
