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
  Image
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

class AddSelfCareService extends React.Component {
  state = {
    id: "",
    type: "",
    clinic_type: "",
    category_id: "",
    name: "",
    price: "",
    discount: "",
    description: "",
    time: "",
    image: null,
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
      category_id &&
      name &&
      price &&
      discount &&
      description &&
      time
    ) {
      if (this.props.route.params.edit) {
        var formdata = new FormData();
        formdata.append("user_id", id);
        formdata.append("type", "Cosmetic Clinic");
        formdata.append("clinic_type", "1");
        formdata.append("category_id", "4");
        formdata.append("name", name);
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
              alert(result.message);
            }
          })
          .catch(error => console.log("error", error));
      } else {
        var formdata = new FormData();
        formdata.append("user_id", id);
        formdata.append("type", "Cosmetic Clinic");
        formdata.append("clinic_type", "1");
        formdata.append("category_id", "4");
        formdata.append("name", name);
        formdata.append("price", price);
        formdata.append("discount", discount);
        formdata.append("description", description);
        formdata.append("time", time);
        formdata.append("image", image);

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
              alert(result.message);
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
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Text
                style={{
                  width: "100%",
                  backgroundColor: "#00C8E4",
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  color: "#ffffff",
                  borderRadius: 30
                }}
              >
                Cosmetic Clinic
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  width: "100%",
                  backgroundColor: "#ffffff",
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  color: "#000000",
                  borderRadius: 30
                }}
              >
                Beauty Salon
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.textLabel}> Clinic Type* </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Select Clinic Type"
            value={this.state.clinic_type}
            onChangeText={text => this.setState({ clinic_type: text })}
          />

          <Text style={styles.textLabel}> Category * </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Select Category"
            value={this.state.category_id}
            onChangeText={text => this.setState({ category_id: text })}
          />

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

          <Text style={{ fontSize: 10, width: "94%" }}>Max 150 words</Text>
          <Text style={styles.textLabel}> Service Image </Text>
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
