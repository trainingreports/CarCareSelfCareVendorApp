import { StatusBar } from "expo-status-bar";
import React from "react";
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
  Image,
  Picker,
  ToastAndroid
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import UserPermissions from "../../UserPermissions";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

class AddSelfCareService extends React.Component {
  state = {
    id: "",
    clinic_type: "",
    category_id: "",
    name: "",
    price: "",
    discount: "",
    description: "",
    time: "",
    image: null,
    service_id: "",
    categoryList: [],
    subCategoryList: [],
    type: "Cosmetic Clinic",
    date: new Date(1598051730000),
    show: false,
    localImage:false
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
    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("https://xionex.in/CarCare/api/v1/clinic-type", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status) {
          this.setState({ categoryList: result.data });
          console.log(this.state.categoryList);
        }
      })
      .catch(error => console.log("error", error));
  };

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
        this.setState({ image: result.uri, localImage:true});
      }
    } catch (E) {
      console.log(E);
    }
  };

  componentDidMount() {
    this.getCategory();
    if (this.props.route.params?.edit) {
      const { item } = this.props.route.params;
      this.setState({
        id: item.user_id,
        type: item.type,
        clinic_type: item.clinic_type,
        category_id: item.category_id,
        name: item.name,
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
      type,
      clinic_type,
      category_id,
      name,
      price,
      discount,
      description,
      time,
      image,
      service_id
    } = this.state;
    if (
      id &&
      clinic_type &&
      name &&
      price &&
      discount &&
      description &&
      time &&
      type &&
      image
    ) {
      if (this.props.route.params?.edit) {
        
        var formdata = new FormData();
        formdata.append("user_id", id);
        formdata.append("type", type);
        formdata.append("name",name)
        formdata.append("clinic_type", clinic_type);
        formdata.append("category_id", category_id);
        formdata.append("image", {
          type: "image/*",
          uri: image,
          name: image
        });
        formdata.append("price", price);
        formdata.append("discount", discount);
        formdata.append("description", description);
        formdata.append("time", time);
        formdata.append("service_id", service_id);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch(
          "https://xionex.in/CarCare/api/v1/edit-self-service",
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
        console.log(image);
        var formdata = new FormData();
        formdata.append("user_id", id);
        formdata.append("type", type);
        formdata.append("clinic_type", clinic_type);
        formdata.append("category_id", category_id);
        formdata.append("name", name);
        formdata.append("price", price);
        formdata.append("discount", discount);
        formdata.append("description", description);
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
          "https://xionex.in/CarCare/api/v1/add-self-service",
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
      }
    } else alert("All fields are mandatory");
  };
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <Text style={styles.textHeading}> Add Service </Text> */}
          <View
            style={{
              flexDirection: "row",
              width: "94%",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => this.setState({ type: "Cosmetic Clinic" })}
              style={{ marginRight: 10 }}
            >
              <Text
                style={
                  this.state.type === "Cosmetic Clinic"
                    ? {
                        width: "100%",
                        backgroundColor: "#00C8E4",
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        color: "#ffffff",
                        borderRadius: 30
                      }
                    : {
                        width: "100%",
                        backgroundColor: "#ffffff",
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        color: "#000000",
                        borderRadius: 30
                      }
                }
              >
                Cosmetic Clinic
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ type: "Beauty Salon" })}
            >
              <Text
                style={
                  this.state.type === "Beauty Salon"
                    ? {
                        width: "100%",
                        backgroundColor: "#00C8E4",
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        color: "#ffffff",
                        borderRadius: 30
                      }
                    : {
                        width: "100%",
                        backgroundColor: "#ffffff",
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        color: "#000000",
                        borderRadius: 30
                      }
                }
              >
                Beauty Salon
              </Text>
            </TouchableOpacity>
          </View>

          {this.state.type === "Cosmetic Clinic" && (
            <>
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
                  selectedValue={this.state.clinic_type}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({ clinic_type: itemValue });
                    var formdata = new FormData();
                    formdata.append("clinic_id", itemValue);

                    var requestOptions = {
                      method: "POST",
                      body: formdata,
                      redirect: "follow"
                    };

                    fetch(
                      "https://xionex.in/CarCare/api/v1/sub-category",
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
                    this.setState({ category_id: itemValue })
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
            </>
          )}

          <Text style={styles.textLabel}> Service Name*</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Service Name"
            value={this.state.name}
            onChangeText={text => this.setState({ name: text })}
          />

          <Text style={styles.textLabel}> Price * </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Price"
            value={this.state.price}
            keyboardType="number-pad"
            onChangeText={text => this.setState({ price: text })}
          />

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
              keyboardType="number-pad"
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
            textAlignVertical="top"
            value={this.state.description}
            onChangeText={text => this.setState({ description: text })}
          />

          <Text style={{ fontSize: 10, width: "94%" }}>Max 150 words</Text>

          <Text style={styles.textLabel}> Service Image </Text>
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
              source={
                this.state.image && this.props.route.params?.edit && !this.state.localImage
                  ? { uri: `https://xionex.in/CarCare/public/vendor/upload/${this.state.image}` }
                  : { uri: this.state.image }
              }
            />
          </TouchableOpacity>

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

export default AddSelfCareService;

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
