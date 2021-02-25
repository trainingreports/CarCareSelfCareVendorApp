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
  Image,
  ToastAndroid
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import UserPermissions from "../../UserPermissions";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
class AddCarService extends React.Component {
  state = {
    category: "",
    subCategory: "",
    name: "",
    price: "",
    place: "",
    discount: "",
    description: "",
    specification: "",
    image: null,
    time: "",
    id: "",
    service_id: "",
    categoryList: [],
    weight: "",
    quantity: "",
    date: new Date(1598051730000),
    show: false,
    localImage: false
  };

  onChange = (event, selectedDate) => {
    this.setState({ show: false });
    this.setState({ time: moment(selectedDate).format("LT") });
  };

  getId = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      return value;
    } catch (e) {
      console.log(e);
    }
  };

  getCategory = () => {
    this.getId().then(id => {
      if (this.props.route.params.services) {
       
        var formdata = new FormData();
        formdata.append("user_id", id);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch(
          "https://xionex.in/CarCare/api/v1/car-care-category",
          requestOptions
        )
          .then(response => response.json())
          .then(result => {
            if (result.status) {
              this.setState({ categoryList: result.data });
            }
          })
          .catch(error => console.log("error", error));
      } else {
       
        var formdata = new FormData();
        formdata.append("user_id", id);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch(
          "https://xionex.in/CarCare/api/v1/car-care-product-category",
          requestOptions
        )
          .then(response => response.json())
          .then(result => {
            if (result.status) {
              this.setState({ categoryList: result.data });
            }
          })
          .catch(error => console.log("error", error));
      }
    });
  };

  componentDidMount() {
    this.getCategory();
    if (this.props.route.params?.edit) {
      if (this.props.route.params.services) {
        const { item } = this.props.route.params;
        this.setState({
          id: item.user_id,
          category: item.category_id,
          name: item.name,
          place: item.place,
          price: item.price,
          discount: item.discount,
          description: item.description,
          time: item.time,
          service_id: item.id,
          image: `https://xionex.in/CarCare/public/vendor/upload/${item.image}`,
        });
      } else {
        const { item } = this.props.route.params;
        this.setState({
          id: item.user_id,
          category: item.category_id,
          name: item.name,
          place: item.brand,
          weight: item.weight_size,
          quantity: item.quantity,
          price: item.price,
          discount: item.discount,
          description: item.description,
          specification: item.specification,
          service_id: item.id,
          image: `https://xionex.in/CarCare/public/vendor/upload/${item.image}`,
        });
      }
    }

    this.getId().then(id => this.setState({ id: id }));
  }

  handleDpUpload = async () => {
    try {
      await UserPermissions.getCameraPermission();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri, localImage: true });
      }
    } catch (E) {
      console.log(E);
    }
  };

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
      service_id,
      weight,
      quantity
    } = this.state;
    if (name && category && price && description && image) {
      if (this.props.route.params?.edit) {
        if (this.props.route.params?.services) {
          var formdata = new FormData();
          formdata.append("user_id", id);
          formdata.append("category_id", category);
          formdata.append("name", name);
          formdata.append("price", price);
          formdata.append("discount", discount);
          formdata.append("description", description);
          formdata.append("place", place);
          formdata.append("time", time);
          formdata.append("image", {
            type: "image/*",
            uri: image,
            name: image
          });
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
                ToastAndroid.show(result.message, 2000);
                this.props.navigation.goBack();
                this.props.navigation.goBack();
              }
            })
            .catch(error => console.log("error", error));
        } else {
          var formdata = new FormData();
          formdata.append("user_id", id);
          formdata.append("category_id", category);
          formdata.append("name", name);
          formdata.append("price", price);
          formdata.append("discount", discount);
          formdata.append("quantity", quantity);
          formdata.append("weight_size", weight);
          formdata.append("specification", specification);
          formdata.append("description", description);
          formdata.append("brand", place);
          formdata.append("image", {
            type: "image/*",
            uri: image,
            name: image
          });
          formdata.append("product_id", service_id);

          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
          };

          fetch("https://xionex.in/CarCare/api/v1/edit-product", requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.status) {
                ToastAndroid.show(result.message, 2000);
                this.props.navigation.goBack();
                this.props.navigation.goBack();
              }
            })
            .catch(error => console.log("error", error));
        }
      } else {
        if (this.props.route.params?.services) {
          var formdata = new FormData();
          formdata.append("user_id", id);
          formdata.append("category_id", "3");
          formdata.append("name", name);
          formdata.append("price", price);
          formdata.append("discount", discount);
          formdata.append("description", description);
          formdata.append("place", place);
          formdata.append("time", time);
          formdata.append("image", {
            type: "image/*",
            uri: image,
            name: image
          });

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
                ToastAndroid.show(result.message, 2000);
                this.props.navigation.goBack();
              }
            })
            .catch(error => console.log("error", error));
        } else {
          var formdata = new FormData();
          formdata.append("user_id", id);
          formdata.append("category_id", category);
          formdata.append("name", name);
          formdata.append("price", price);
          formdata.append("discount", discount);
          formdata.append("quantity", quantity);
          formdata.append("weight_size", weight);
          formdata.append("specification", specification);
          formdata.append("description", description);
          formdata.append("brand", place);
          formdata.append("image", {
            type: "image/*",
            uri: image,
            name: image
          });
          formdata.append("product_id", service_id);

          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
          };

          fetch("https://xionex.in/CarCare/api/v1/add-product", requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.status) {
                ToastAndroid.show(result.message, 2000);
                this.props.navigation.goBack();
              }
            })
            .catch(error => console.log("error", error));
        }
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
          <Text style={styles.textHeading}>
            {this.props.route.params.services ? "Add Services" : "Add Product"}
          </Text>

          <Text style={styles.textLabel}> Category * </Text>
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
                //   var formdata = new FormData();
                //   formdata.append("clinic_id", itemValue);

                //   var requestOptions = {
                //     method: "POST",
                //     body: formdata,
                //     redirect: "follow"
                //   };

                //   fetch(
                //     "https://xionex.in/CarCare/api/v1/sub-category",
                //     requestOptions
                //   )
                //     .then(response => response.json())
                //     .then(result => {
                //       if (result.status) {
                //         this.setState({ subCategoryList: result.data });
                //       }
                //     })
                //     .catch(error => console.log("error", error));
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
            keyboardType="number-pad"
            onChangeText={text => this.setState({ price: text })}
          />

          {this.props.route.params.services ? (
            <>
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
            </>
          ) : (
            <>
              <Text style={styles.textLabel}> Select Brand </Text>
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
                    label="BOSCH"
                    color="#B3B3B3"
                    fontSize="10"
                    value="1"
                  />
                </Picker>
              </View>

              <Text style={styles.textLabel}> Product Weight </Text>
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
                  keyboardType="number-pad"
                  placeholder="Enter Weight"
                  value={this.state.weight}
                  onChangeText={text => this.setState({ weight: text })}
                />
                <Text style={{ padding: 10, color: "#999999" }}>g</Text>
              </View>

              <Text style={styles.textLabel}> Product Quantity </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Quantity"
                keyboardType="number-pad"
                value={this.state.quantity}
                onChangeText={text => this.setState({ quantity: text })}
              />
            </>
          )}

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
              keyboardType="number-pad"
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
            textAlignVertical="top"
            onChangeText={text => this.setState({ description: text })}
          />

          {!this.props.route.params.services && (
            <>
              <Text style={styles.textLabel}> Specifications </Text>
              <TextInput
                style={styles.textArea}
                placeholder="Enter Specifications"
                numberOfLines={10}
                multiline={true}
                textAlignVertical="top"
                value={this.state.specification}
                onChangeText={text => this.setState({ specification: text })}
              />
            </>
          )}

          <Text style={styles.textLabel}> Product Image </Text>
          <TouchableOpacity
            onPress={this.handleDpUpload}
            style={{
              width: "93.5%",
              height: 190,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              elevation: 2,
              margin: 2,
              borderRadius: 5
            }}
          >
            <Image
              style={{
                width: "93%",
                height: 170,
                borderRadius: 5
              }}
              resizeMode={"cover"}
              source={this.state.image?{uri:this.state.image}:
              require("../../assets/9.4-Service-Add/image_placeholder.png")}
            />
          </TouchableOpacity>

          {this.props.route.params.services && (
            <>
              <Text style={styles.textLabel}> Service Time(hh:mm) </Text>
              <TouchableOpacity
                style={styles.textInput}
                onPress={() => this.setState({ show: true })}
              >
                <TextInput
                  placeholder="00:00"
                  value={this.state.time}
                  editable={false}
                />
              </TouchableOpacity>

              {this.state.show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={this.state.date}
                  mode="time"
                  //maximumDate={Date.now()}
                  is24Hour={true}
                  display="default"
                  onChange={this.onChange}
                />
              )}
            </>
          )}

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
