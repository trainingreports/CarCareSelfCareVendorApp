import { StatusBar } from "expo-status-bar";

import * as React from "react";

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  Rating,
  AirbnbRating
} from "react-native";
///import { SafeAreaView, FlatList, } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

class GenerateOfferCode extends React.Component {
  state = {
    user_id: "",
    code: "",
    discount: "",
    no_of_user: "",
    validity: "",
    offer_id: ""
  };

  getId = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      return value;
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    if (this.props.route.params.edit) {
      const { item } = this.props.route.params;
      this.setState({
        user_id: item.user_id,
        code: item.code,
        discount: item.discount,
        no_of_user: item.no_of_user,
        validity: item.validity,
        offer_id: item.id
      });
    }
    this.getId().then(id => this.setState({ user_id: id }));
  }
  handleClick = () => {
    const {
      user_id,
      code,
      discount,
      no_of_user,
      validity,
      offer_id
    } = this.state;

    if (user_id && code && discount && no_of_user && validity) {
      if (this.props.route.params.edit) {
        var formdata = new FormData();
        formdata.append("user_id", user_id);
        formdata.append("code", code);
        formdata.append("discount", discount);
        formdata.append("no_of_user", no_of_user);
        formdata.append("validity", validity);

        formdata.append("offer_id", offer_id);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch("https://xionex.in/CarCare/api/v1/edit-offer", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.status) {
              alert(result.message);
              this.props.navigation.goBack();
            }
          })
          .catch(error => console.log("error", error));
      } else {
        var formdata = new FormData();
        formdata.append("user_id", user_id);
        formdata.append("code", code);
        formdata.append("discount", discount);
        formdata.append("no_of_user", no_of_user);
        formdata.append("validity", validity);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch("https://xionex.in/CarCare/api/v1/add-offer", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.status) {
              alert(result.message);
              this.props.navigation.goBack();
            }
          })
          .catch(error => console.log("error", error));
      }
    } else {
      alert("All fields are mandatory");
    }
  };
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
        <View style={styles.container}>
          {/* <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              marginTop: 16,
              width: "94%",
              fontWeight: 'bold'
            }}>Generate Offer Code</Text> */}

          <Text
            style={{
              textAlign: "left",
              marginStart: 8,
              marginTop: 8,
              marginBottom: 8,
              color: "#4D4D4D",
              fontWeight: "bold",
              width: "94%"
            }}
          >
            Offer Code
          </Text>
          <TextInput
            style={{
              height: 40,
              width: "94%",
              padding: 10,
              borderRadius: 4,
              borderColor: "gray",
              backgroundColor: "#FFFFFF",
              borderWidth: 1
            }}
            placeholder="Enter Offer Code"
            value={this.state.code}
            onChangeText={text => this.setState({ code: text })}
          />
          <Text
            style={{
              textAlign: "left",
              marginStart: 8,
              marginBottom: 8,
              color: "#4D4D4D",
              marginTop: 16,
              fontWeight: "bold",
              width: "94%"
            }}
          >
            Discount{" "}
          </Text>
          <TextInput
            style={{
              height: 40,
              width: "94%",
              padding: 10,
              borderRadius: 4,
              borderColor: "gray",
              backgroundColor: "#FFFFFF",
              borderWidth: 1
            }}
            placeholder="Enter Discount"
            value={this.state.discount}
            onChangeText={text => this.setState({ discount: text })}
          />

          <Text
            style={{
              textAlign: "left",
              marginStart: 8,
              marginBottom: 8,
              color: "#4D4D4D",
              marginTop: 16,
              fontWeight: "bold",
              width: "94%"
            }}
          >
            No. of User
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter No. of User"
            value={this.state.no_of_user}
            onChangeText={text => this.setState({ no_of_user: text })}
          />

          <Text
            style={{
              textAlign: "left",
              marginStart: 8,
              marginBottom: 8,
              color: "#4D4D4D",
              marginTop: 16,
              fontWeight: "bold",
              width: "94%"
            }}
          >
            Velidy
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="DD/MM/YYYY"
            value={this.state.validity}
            onChangeText={text => this.setState({ validity: text })}
          />

          <View
            style={[
              {
                width: "94%",
                marginStart: 10,
                marginEnd: 10,
                marginTop: 24,
                marginBottom: 16,
                backgroundColor: "#00C8E4",
                borderRadius: 4
              }
            ]}
          >
            <Button title="SUBMIT" color="#00C8E4" onPress={this.handleClick} />
          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
  }
}

export default GenerateOfferCode;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 66,
    height: 58
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
    width: "47%",
    fontSize: 18,
    marginStart: 16,
    marginBottom: 16,
    marginTop: 32,
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
