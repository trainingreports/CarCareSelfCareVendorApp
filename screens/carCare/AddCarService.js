import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StackActions } from "@react-navigation/native";
import {
  ScrollView,
  ImageBackground,
  Button,
  StyleSheet,
  Text,
  CheckBox,
  TextInput,
  TouchableOpacity,
  View,
  Picker,
  Image
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

class AddCarService extends React.Component {
  state = {
    category: "",
    name: "",
    price: "",
    place: "",
    discount: "",
    description: "",
    specification: "",
    image: null,
    time: "",
    id: "",
    service_id: ""
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
        id: item.user_id,
        category_id: item.category_id,
        name: item.name,
        place: item.place,
        price: item.price,
        discount: item.discount,
        description: item.description,
        time: item.time,
        service_id: item.id
      });
    }
    this.getId().then(id => this.setState({ id: id }));
  }

  handleClick = () => {
    const {
      id,
      category,
      name,
      price,
      place,
      discount,
      description,
      specification,
      image,
      time,
      service_id
    } = this.state;
    if (name && price && place && discount && description && time) {
      if (this.props.route.params.edit) {
        var formdata = new FormData();
        formdata.append("user_id", id);
        formdata.append("category_id", "3");
        formdata.append("name", name);
        formdata.append("price", price);
        formdata.append("discount", discount);
        formdata.append("description", description);
        formdata.append("place", place);
        formdata.append("time", time);
        formdata.append("image", image);
        formdata.append("service_id", service_id);
        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch(
          "https://xionex.in/CarCare/api/v1/edit-car-service",
          requestOptions
        )
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
        formdata.append("user_id", id);
        formdata.append("category_id", "3");
        formdata.append("name", name);
        formdata.append("price", price);
        formdata.append("discount", discount);
        formdata.append("description", description);
        formdata.append("place", place);
        formdata.append("time", time);
        formdata.append("image", image);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch(
          "https://xionex.in/CarCare/api/v1/add-car-service",
          requestOptions
        )
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
      <ScrollView>
        <View style={styles.container}>
          {/* <Text style={styles.textHeading}> Add Service </Text> */}

          <Text style={styles.textLabel}> Category * </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Select Category"
            value={this.state.category}
            onChangeText={text => this.setState({ category: text })}
          />

          <Text style={styles.textLabel}> Product Name * </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Product Name"
            value={this.state.name}
            onChangeText={text => this.setState({ name: text })}
          />

          <Text style={styles.textLabel}> Price * </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Price"
            defaultValue=""
            value={this.state.price}
            onChangeText={text => this.setState({ price: text })}
          />

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

          <Text style={styles.textLabel}> Discount </Text>
          <View
            style={[
              {
                width: "94%",
                marginStart: 10,
                marginEnd: 10,
                flexDirection: "row",
                borderWidth: 1,
                backgroundColor: "#FFFFFF",
                borderRadius: 4
              }
            ]}
          >
            <TextInput
              style={{
                height: 40,
                width: "94%",
                padding: 10
              }}
              placeholder="Enter Discount"
              value={this.state.discount}
              onChangeText={text => this.setState({ discount: text })}
            />
            <Text style={{ padding: 10, color: "#999999" }}>%</Text>
          </View>

          <Text style={styles.textLabel}> Description </Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter Description"
            numberOfLines={10}
            multiline={true}
            value={this.state.description}
            onChangeText={text => this.setState({ description: text })}
          />

          <Text style={styles.textLabel}> Specifications </Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter Specifications"
            numberOfLines={10}
            multiline={true}
            value={this.state.specification}
            onChangeText={text => this.setState({ specification: text })}
          />

          <Text style={styles.textLabel}> Product Image </Text>
          <Image
            style={{
              width: "94%",
              height: 160
            }}
            resizeMode={"cover"}
            source={require("../../assets/9.4-Service-Add/image_placeholder.png")}
          />

          <Text style={styles.textLabel}> Service Time(hh:mm) </Text>
          <TextInput
            style={styles.textInput}
            placeholder="00:00"
            value={this.state.time}
            onChangeText={text => this.setState({ time: text })}
          />

          <View
            style={[
              {
                width: "94%",
                marginStart: 10,
                marginEnd: 10,
                marginTop: 10,
                marginBottom: 56,
                backgroundColor: "#FFFFFF",
                borderRadius: 4
              }
            ]}
          >
            <TouchableOpacity onPress={this.handleClick}>
              <Text
                style={{
                  textAlign: "center",
                  padding: 10,
                  color: "#00C8E4",
                  fontSize: 18,
                  fontWeight: "bold"
                }}
              >
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
  }
}

export default AddCarService;

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
    marginBottom: 16,
    marginTop: 32,
    fontWeight: "bold",
    textAlign: "left",
    width: "94%"
  },
  textLabel: {
    textAlign: "left",
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
  textArea: {
    width: "94%",
    padding: 10,
    borderRadius: 4,
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    height: 150,
    justifyContent: "flex-start"
  }
});
