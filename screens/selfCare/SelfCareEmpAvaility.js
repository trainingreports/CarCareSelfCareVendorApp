import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Animated,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
  Modal,
  ToastAndroid
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import UserPermissions from "../../UserPermissions";
import * as ImagePicker from "expo-image-picker";

const { width, height } = Dimensions.get("screen");

class EmpAbility extends React.Component {
  state = {
    modalVisible: false,
    ID: "",
    newEmpName: "",
    newEmpImg: null,
    employeeList: [],
    serviceData: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba23423sdf",
        title: "First Item"
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63234234dsf",
        title: "Second Item"
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72234234sdf",
        title: "Third Item"
      },
      {
        id: "586sdfsd94a0f-3da1-471f-bd96-145571e29d72234234sdf",
        title: "Third Item"
      }
    ],
    isDateTimePickerVisible: false
  };
  renderItem1 = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.buttonContainer}>
          <Image
            style={{
              width: 108,
              height: 108
            }}
            resizeMode={"cover"}
            source={require("../../assets/self_service_pic_2.png")}
          />
          <View style={{ width: "76%", marginStart: 10, marginEnd: 10 }}>
            <View style={styles.buttonContainer}>
              <Text style={{ width: "80%", textAlign: "left" }}>
                Implant Bridges{" "}
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 4
                }}
              >
                <Image
                  style={{
                    width: 26,
                    height: 26,
                    marginEnd: 2
                  }}
                  resizeMode={"cover"}
                  source={require("../../assets/edit.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 4
                }}
              >
                <Image
                  style={{
                    width: 26,
                    height: 26,
                    marginEnd: 2
                  }}
                  resizeMode={"cover"}
                  source={require("../../assets/delete.png")}
                />
              </TouchableOpacity>
            </View>
            <Text style={{ width: "50%", fontWeight: "bold" }}>25.00 AED </Text>
            <Text style={{ width: "98%", color: "#B3B3B3" }}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print,{" "}
            </Text>
            <Text style={{ width: "98%", color: "#808080" }}>
              2 Hrs 30 Min{" "}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  getEmployees = () => {
    this.getId().then(id => {
      var formdata = new FormData();
      formdata.append("user_id", id);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch("https://xionex.in/CarCare/api/v1/get-employee", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            console.log("EMPLOYEE DATA===>",result.data);
            this.setState({ employeeList: result.data });
          }
        })
        .catch(error => console.log("error", error));
    });
  };
  getId = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      this.setState({ ID: value });
      return value;
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.getId();
    this.getEmployees();
  }

  handleDpUpload = async () => {
    try {
      await UserPermissions.getCameraPermission();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 0.5
      });
      if (!result.cancelled) {
        this.setState({ newEmpImg: result.uri });
      }
    } catch (E) {
      console.log(E);
    }
  };

  addEmployee = () => {
    if (this.state.newEmpName) {
      console.log(this.state.newEmpImg)
      var formdata = new FormData();
      formdata.append("user_id", this.state.ID);
      formdata.append("name", this.state.newEmpName);
      formdata.append("image", {
        type: "image/*",
        uri: this.state.newEmpImg,
        name: this.state.newEmpImg
      });
      //formdata.append("image", null);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch("https://xionex.in/CarCare/api/v1/add-employee", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            ToastAndroid.show(result.message, 2000);
            this.getEmployees();
            this.setState({ modalVisible: false });
          }
        })
        .catch(error => console.log("error", error));
    } else {
      this.setState({ modalVisible: false });
    }
  };
  getEmployeesAvailability = () => {

  }

  renderItem = ({ item, index }) => {
    return (
      <View>
        {index === 0 ? (
          <TouchableOpacity
          activeOpacity={1}
            onPress={() => this.setState({ modalVisible: true })}
            style={{
              width: width * 0.23,
              height: width * 0.23,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              elevation: 2,
              margin: 2
            }}
          >
            <Image
              style={{ height: 35, width: 35 }}
              source={require("../../assets/add_service_Product.png")}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
          onPress={()=>this.getEmployeesAvailability(item.id)}
          activeOpacity={1} style={{ margin: 0 }}>
            <Image
              style={{ width: width / 4, height: width / 4, borderRadius: 10 }}
              source={{uri:`https://xionex.in/CarCare/public/vendor/upload/${item.image}`}}
            />
            <Text style={{ textAlign: "center", marginTop: 5 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
              marginVertical: 20,
              fontWeight: "bold"
            }}
          >
            ADD EMPLOYEE & AVALIABILITY
          </Text>
          <Animated.View>
          {!this.state.employeeList.length
          ?<TouchableOpacity
            onPress={() => this.setState({ modalVisible: true })}
            style={{
              width: width * 0.23,
              height: width * 0.23,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              elevation: 2,
              margin: 2,
              alignSelf:'center'
            }}
          >
            <Image
              style={{ height: 35, width: 35 }}
              source={require("../../assets/add_service_Product.png")}
            />
          </TouchableOpacity>
           :<Carousel
              data={this.state.employeeList}
              sliderWidth={width}
              itemWidth={100}
              inactiveSlideOpacity={0.75}
              inactiveSlideScale={0.9}
              renderItem={this.renderItem}
            />}
          </Animated.View>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
              marginVertical: 20,
              fontWeight: "bold",
              opacity: 0.5
            }}
          >
            DAYS AVAILABILITY
          </Text>
          <Calendar
            // Initially visible month. Default = Date()
            theme={{
              monthTextColor: "blue"
            }}
            current={"2021-02-11"}
            renderHeader={date => {
              /*Return JSX*/
            }}
            onDayPress={date => alert(date.dateString)}
            enableSwipeMonths={true}
            markedDates={{
              "2021-02-15": { textColor: "green" },
              "2021-02-12": { startingDay: true, color: "green" },
              "2021-02-12": {
                selected: true,
                endingDay: true,
                color: "green",
                textColor: "gray"
              },
              "2021-02-06": {
                selected: true,
                endingDay: true,
                color: "green",
                textColor: "gray"
              },
              "2021-02-10": {
                selected: true,
                endingDay: true,
                color: "green",
                textColor: "gray"
              },
              "2021-02-11": {
                selected: true,
                endingDay: true,
                color: "green",
                textColor: "gray"
              },
              "2021-02-12": {
                selected: true,
                endingDay: true,
                color: "green",
                textColor: "gray"
              },
              "2021-02-17": {
                disabled: true,
                startingDay: true,
                color: "red",
                textColor: "red",
                endingDay: true
              }
            }}
          />
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
              marginVertical: 20,
              fontWeight: "bold",
              opacity: 0.5
            }}
          >
            TIME AVAILABILITY
          </Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TextInput
              placeholder="From"
              style={{
                borderWidth: 2,
                borderColor: "#ddd",
                height: 30,
                padding: 5,
                width: width / 2 - 10
              }}
            />
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: "#ddd",
                padding: 5,
                height: 30,
                width: width / 2 - 10,
                marginLeft: 10
              }}
              placeholder="To"
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
              marginVertical: 20,
              fontWeight: "bold",
              opacity: 0.5
            }}
          >
            SELECT SERVICE
          </Text>
          <FlatList
            data={this.state.serviceData}
            renderItem={this.renderItem1}
            keyExtractor={item => item.id}
          />
        </ScrollView>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textHeading}>Add Employee </Text>

              <TouchableOpacity
                onPress={this.handleDpUpload}
                style={{
                  height: width * 0.2,
                  width: width * 0.2,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  elevation: 2,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 15
                }}
              >
                <Image
                  style={{
                    height: width * 0.18,
                    width: width * 0.18,
                    resizeMode: "contain",
                    borderRadius: 10
                  }}
                  source={
                    this.state.newEmpImg
                      ? { uri: this.state.newEmpImg }
                      : require("../../assets/9.4-Service-Add/image_placeholder.png")
                  }
                />
              </TouchableOpacity>

              <TextInput
                style={styles.textInput}
                placeholder="Enter Name"
                value={this.state.newEmpName}
                onChangeText={Text => this.setState({ newEmpName: Text })}
              />
              <TouchableOpacity
                onPress={this.addEmployee}
                style={{
                  backgroundColor: "#00C8E4",
                  justifyContent: "center",
                  alignItems: "center",
                  height: width * 0.1,
                  width: width * 0.3,
                  borderRadius: 10
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "bold"
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default EmpAbility;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center"
  },
  textHeading: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: "bold"
  },
  textInput: {
    height: 30,
    marginBottom: 10,
    width: "96%",
    padding: 10,
    borderRadius: 4,
    borderColor: "#CCCCCC",
    backgroundColor: "#FFFFFF",
    borderWidth: 1
  },

  textLabel: {
    textAlign: "left",
    //marginStart: 8,
    marginBottom: 10,
    color: "#000000",
    marginTop: 20,
    fontStyle: "normal",
    width: "96%"
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
    borderWidth: 1,
    marginBottom: 15
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    height: width * 0.8,
    width: width * 0.8,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
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
  //more Tabs
  rawContainer: {
    width: "90%",
    flexDirection: "row"
  },
  icon: {
    width: 22,
    height: 22,
    marginEnd: 16
  },
  label: {
    width: "90%",
    fontSize: 18,
    color: "#4D4D4D",
    justifyContent: "center"
  },
  view: {
    width: "90%",
    marginBottom: 16,
    marginTop: 16,
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1
  },
  button: {
    width: "50%",
    color: "#00C8E4",
    textAlign: "right",
    borderWidth: 1,
    textAlign: "center",
    margin: 8,
    borderColor: "#00C8E4",
    padding: 4,
    borderRadius: 4
  },

  //Mange Users
  buttonStyle: {
    width: "40%",
    color: "#00C8E4",
    borderColor: "#00C8E4",
    borderWidth: 1,
    marginStart: 16,
    marginEnd: 16,
    flexDirection: "row",
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    padding: 4,
    borderRadius: 100,
    textAlign: "center"
  },
  buttonIcon: {
    width: 12,
    height: 12,
    marginEnd: 4
  }
});
