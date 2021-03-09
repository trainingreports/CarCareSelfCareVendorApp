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
import Calendar from "react-native-calendar";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import UserPermissions from "../../UserPermissions";
import * as ImagePicker from "expo-image-picker";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import StarRating from "react-native-star-rating";
import { URL } from "../../DomainConstant";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

class EmpAbility extends React.Component {
  state = {
    modalVisible: false,
    date: new Date(1598051730000),
    showFrom: false,
    showTo: false,
    from: "",
    to: "",
    ID: "",
    newEmpName: "",
    AddNewEmployee: false,
    newEmpImg: null,
    employeeList: [],
    employeesAvailability: {},
    employeesAvailabilityCheck: false,
    selected_emp: "",
    selected_date: "",
    selected_month: "",
    selected_service: "",
    serviceData: [],
    isDateTimePickerVisible: false,
    availabilityTab: true,
    employeesDisability: [],
    self: false,
    check: false,
    availableServices: []
  };
  renderItem1 = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.setState({ selected_service: item.id })}
        style={styles.item}
      >
        <View style={styles.buttonContainer}>
          <Image
            style={{
              width: 108,
              height: 108,
              marginLeft: 15,
              borderRadius: 5
            }}
            resizeMode={"cover"}
            source={{
              uri: `https://xionex.in/CarCare/public/vendor/upload/${item.image}`
            }}
          />
          <View style={{ width: "76%", marginStart: 10, marginEnd: 10 }}>
            <Text style={{ width: "50%", fontWeight: "bold" }}>
              {item.name}
            </Text>

            <Text style={{ width: "50%", fontWeight: "bold" }}>
              {item.price} AED{" "}
            </Text>
            <View style={{ alignItems: "flex-start" }}>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={parseInt(item.avg_rating)}
                starSize={14}
                starStyle={{
                  color: "#FFB74D"
                }}
              />
            </View>
            <Text style={{ width: "98%", color: "#B3B3B3" }}>
              {item.description}
            </Text>
            <Text style={{ width: "98%", color: "#808080" }}>
              {item.updated_at}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
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

      fetch(`${URL}get-employee`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            console.log("EMPLOYEE DATA===>", result.data);
            this.setState({ employeeList: [{}, ...result.data] });
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
  getRole = async () => {
    try {
      const value = await AsyncStorage.getItem("self");
      return value;
    } catch (e) {
      console.log(e);
    }
  };
  getDataCar = () => {
    this.getId().then(id => {
      this.setState({ user_id: id });
      var formdata = new FormData();
      formdata.append("user_id", id);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch(`${URL}my-car-service`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            console.log("Car Services =====>", result.data);
            this.setState({ serviceData: result.data });
          }
        })
        .catch(error => console.log("error", error));
    });
  };
  getDataSelf = () => {
    this.getId().then(id => {
      this.setState({ user_id: id });
      var formdata = new FormData();
      formdata.append("user_id", id);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch(`${URL}my-self-service`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            this.setState({ serviceData: result.data });
          }
        })
        .catch(error => console.log("error", error));
    });
  };
  getServices = () => {
    this.getRole().then(role => {
      if (role === "true") {
        this.getDataSelf();
      } else {
        this.getDataCar();
      }
    });
  };
  componentDidMount() {
    this.getId();
    this.getRole().then(role => {
      if (role === "true") {
        this.setState({ self: true });
      } else {
        this.setState({ self: false });
      }
    });
    this.getEmployees();
    this.getServices();
    this.getDis();
    const didFocusSubscription = this.props.navigation.addListener(
      "focus",
      () => {
        this.getId();
        this.getRole().then(role => {
          if (role === "true") {
            this.setState({ self: true });
          } else {
            this.setState({ self: false });
          }
        });
        this.getEmployees();
        this.getServices();
        this.getDis();
      }
    );
  }
  getDis = () => {
    if (!this.state.self) {
      const d = moment().format("L");
      const m = String(d).slice(0, 2);
      const y = String(d).slice(6, 10);
      const f = y + "-" + m;
      this.getId().then(id => {
        var formdata = new FormData();
        formdata.append("user_id", id);
        formdata.append("em_id", "");
        formdata.append("date", f);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch(`${URL}get-disable-availability`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.status) {
              result.data.forEach(item => {
                this.setState({
                  employeesDisability: [
                    ...this.state.employeesDisability,
                    item.date
                  ]
                });
              });
            }
          })
          .catch(error => console.log("error", error));
      });
    }
  };
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
      console.log(this.state.newEmpImg);
      var formdata = new FormData();
      formdata.append("user_id", this.state.ID);
      formdata.append("name", this.state.newEmpName);
      formdata.append("image", {
        type: "image/*",
        uri: this.state.newEmpImg,
        name: this.state.newEmpImg
      });

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch(`${URL}add-employee`, requestOptions)
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
    if (this.state.selected_emp === "" && this.state.self) {
      alert("Please select an employee");
    } else if (this.state.selected_date === "") {
      alert("Please select a date");
    } else {
      this.getId().then(id => {
        if (this.state.self) {
          var formdata = new FormData();
          formdata.append("user_id", id);
          formdata.append("em_id", this.state.selected_emp);
          formdata.append("date", this.state.selected_date);

          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
          };

          fetch(`${URL}get-availability`, requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.status) {
                console.log("DATA====>", result.data.selfservices);
                this.setState({
                  employeesAvailability: result.data,
                  availableServices: result.data.selfservices,
                  employeesAvailabilityCheck: true
                });
              } else {
                alert("Nothing");
              }
            })
            .catch(error => console.log("error", error));
        } else {
          console.log(id, this.state.selected_date);
          var formdata = new FormData();
          formdata.append("user_id", id);
          formdata.append("em_id", "");
          formdata.append("date", this.state.selected_date);

          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
          };

          fetch(`${URL}get-availability`, requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.status) {
                this.setState({
                  employeesAvailability: result.data,
                  availableServices: result.data.carservices,
                  employeesAvailabilityCheck: true
                });
              } else {
                ToastAndroid.show("No Availability Found", 3000);
                this.setState({
                  employeesAvailability: {},
                  availableServices: [],
                  employeesAvailabilityCheck: false
                });
              }
            })
            .catch(error => console.log("error", error));
        }
      });
    }
  };
  addEmployeesAvailability = () => {
    if (this.state.selected_emp === "" && this.state.self) {
      alert("Please select an employee");
    } else if (this.state.selected_date === "") {
      alert("Please select a date");
    } else if (this.state.from === "") {
      alert("Please select service start time");
    } else if (this.state.to === "") {
      alert("Please select service end time");
    } else if (this.state.selected_service === "") {
      alert("Please select a service");
    } else {
      this.getId().then(id => {
        if (this.state.self) {
          var formdata = new FormData();
          formdata.append("user_id", id);
          formdata.append("em_id", this.state.selected_emp);
          formdata.append("date", this.state.selected_date);
          formdata.append("time_from", this.state.from);
          formdata.append("time_to", this.state.to);
          formdata.append("self_services", this.state.selected_service);
          formdata.append("car_services", "");

          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
          };

          fetch(`${URL}add-availability`, requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.status) {
                ToastAndroid.show(result.message, 2000);
                this.setState({ AddNewEmployee: false });
              }
            })
            .catch(error => console.log("error", error));
        } else {
          var formdata = new FormData();
          formdata.append("user_id", id);
          formdata.append("em_id", "");
          formdata.append("date", this.state.selected_date);
          formdata.append("time_from", this.state.from);
          formdata.append("time_to", this.state.to);
          formdata.append("self_services", "");
          formdata.append("car_services", this.state.selected_service);

          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
          };

          fetch(`${URL}add-availability`, requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.status) {
                ToastAndroid.show(result.message, 2000);
                this.setState({ AddNewEmployee: false });
              }
            })
            .catch(error => console.log("error", error));
        }
      });
    }
  };
  onChangeFrom = (event, selectedDate) => {
    this.setState({ showFrom: false });
    this.setState({ from: moment(selectedDate).format("LT") });
  };
  onChangeTo = (event, selectedDate) => {
    this.setState({ showTo: false });
    this.setState({ to: moment(selectedDate).format("LT") });
  };
  renderItem2 = ({ item, index }) => {
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
              margin: 5
            }}
          >
            <Image
              style={{ height: 35, width: 35 }}
              source={require("../../assets/add_service_Product.png")}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              const d = moment().format("L");
              const m = String(d).slice(0, 2);
              const y = String(d).slice(6, 10);
              const f = y + "-" + m;
              this.setState({
                selected_emp: item.id,
                selected_month: f
              });
              this.getEmployeesDisability();
            }}
            activeOpacity={1}
            style={{ margin: 0 }}
          >
            <Image
              style={{ width: width / 4, height: width / 4, borderRadius: 10 }}
              source={{
                uri: `https://xionex.in/CarCare/public/vendor/upload/${item.image}`
              }}
            />
            <Text style={{ textAlign: "center", marginTop: 5 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  getEmployeesDisability = () => {
    this.setState({ employeesDisability: [] });
    this.getId().then(id => {
      if (this.state.self) {
        var formdata = new FormData();
        formdata.append("user_id", id);
        formdata.append("em_id", this.state.selected_emp);
        formdata.append("date", this.state.selected_month);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch(`${URL}get-disable-availability`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.status) {
              result.data.forEach(item => {
                this.setState({
                  employeesDisability: [
                    ...this.state.employeesDisability,
                    item.date
                  ]
                });
              });
            }
          })
          .catch(error => console.log("error", error));
      } else {
        var formdata = new FormData();
        formdata.append("user_id", id);
        formdata.append("em_id", "");
        formdata.append("date", this.state.selected_month);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };

        fetch(`${URL}get-disable-availability`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.status) {
              result.data.forEach(item => {
                this.setState({
                  employeesDisability: [
                    ...this.state.employeesDisability,
                    item.date
                  ]
                });
              });
            }
          })
          .catch(error => console.log("error", error));
      }
    });
  };
  disableEmployeesAvailability = () => {
    if (this.state.selected_emp === "" && this.state.self) {
      alert("Please select an employee");
    } else if (this.state.selected_date === "") {
      alert("Please select a date");
    } else {
      this.getId().then(id => {
        if (this.state.self) {
          var formdata = new FormData();
          formdata.append("user_id", id);
          formdata.append("em_id", this.state.selected_emp);
          formdata.append("date", this.state.selected_date);

          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
          };

          fetch(`${URL}disable-availability`, requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.status) {
                ToastAndroid.show(result.message, 2000);
              }
            })
            .catch(error => console.log("error", error));
        } else {
          var formdata = new FormData();
          formdata.append("user_id", id);
          formdata.append("em_id", "");
          formdata.append("date", this.state.selected_date);

          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
          };

          fetch(`${URL}disable-availability`, requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.status) {
                ToastAndroid.show(result.message, 2000);
              }
            })
            .catch(error => console.log("error", error));
        }
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <TouchableOpacity
              onPress={() => this.setState({ availabilityTab: true })}
              style={
                this.state.availabilityTab
                  ? {
                      backgroundColor: "#00C8E4",
                      borderColor: "#00C8E4",
                      borderWidth: 2,
                      width: width / 2,
                      paddingVertical: width * 0.03,
                      justifyContent: "center",
                      alignItems: "center"
                    }
                  : {
                      backgroundColor: "#fff",
                      borderColor: "#00C8E4",
                      borderWidth: 2,
                      width: width / 2,
                      paddingVertical: width * 0.03,
                      justifyContent: "center",
                      alignItems: "center"
                    }
              }
            >
              <Text
                style={
                  this.state.availabilityTab
                    ? {
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: 18
                      }
                    : {
                        color: "#00C8E4",
                        fontWeight: "700",
                        fontSize: 18
                      }
                }
              >
                Availability
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ availabilityTab: false });
              }}
              style={
                !this.state.availabilityTab
                  ? {
                      backgroundColor: "#00C8E4",
                      borderColor: "#00C8E4",
                      borderWidth: 2,
                      width: width / 2,
                      paddingVertical: width * 0.03,
                      justifyContent: "center",
                      alignItems: "center"
                    }
                  : {
                      backgroundColor: "#fff",
                      borderColor: "#00C8E4",
                      borderWidth: 2,
                      width: width / 2,
                      paddingVertical: width * 0.03,
                      justifyContent: "center",
                      alignItems: "center"
                    }
              }
            >
              <Text
                style={
                  !this.state.availabilityTab
                    ? {
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: 18
                      }
                    : {
                        color: "#00C8E4",
                        fontWeight: "700",
                        fontSize: 18
                      }
                }
              >
                Disability
              </Text>
            </TouchableOpacity>
          </View>

          {this.state.availabilityTab ? (
            <>
              {this.state.self && (
                <>
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
                    {!this.state.employeeList.length ? (
                      <TouchableOpacity
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
                          alignSelf: "center"
                        }}
                      >
                        <Image
                          style={{ height: 35, width: 35 }}
                          source={require("../../assets/add_service_Product.png")}
                        />
                      </TouchableOpacity>
                    ) : (
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                      >
                        {this.state.employeeList.map((item, index) => (
                          <View>
                            {index === 0 ? (
                              <TouchableOpacity
                                activeOpacity={1}
                                onPress={() =>
                                  this.setState({ modalVisible: true })
                                }
                                style={{
                                  width: width / 4,
                                  height: width / 4,
                                  borderRadius: 10,
                                  justifyContent: "center",
                                  alignItems: "center",
                                  backgroundColor: "#fff",
                                  elevation: 2,
                                  margin: 5,
                                  marginLeft: 50
                                }}
                              >
                                <Image
                                  style={{ height: 35, width: 35 }}
                                  source={require("../../assets/add_service_Product.png")}
                                />
                              </TouchableOpacity>
                            ) : (
                              <TouchableOpacity
                                onPress={() =>
                                  this.setState({ selected_emp: item.id })
                                }
                                style={{ margin: 5 }}
                              >
                                <Image
                                  style={{
                                    width: width / 4,
                                    height: width / 4,
                                    borderRadius: 10
                                  }}
                                  source={{
                                    uri: `https://xionex.in/CarCare/public/vendor/upload/${item.image}`
                                  }}
                                />
                                <Text
                                  style={{ textAlign: "center", marginTop: 5 }}
                                >
                                  {item.name}
                                </Text>
                                {this.state.selected_emp === item.id && (
                                  <View
                                    style={{
                                      position: "absolute",
                                      top: -5,
                                      right: -5,
                                      backgroundColor: "#fff"
                                    }}
                                  >
                                    <AntDesign
                                      name="checkcircle"
                                      size={20}
                                      color="black"
                                    />
                                  </View>
                                )}
                              </TouchableOpacity>
                            )}
                          </View>
                        ))}
                      </ScrollView>
                    )}
                  </Animated.View>
                </>
              )}
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
                showEventIndicators
                showControls
                eventDates={[]}
                onDateSelect={date => {
                  const d = String(date).slice(0, 10);
                  this.setState({ selected_date: d });
                }}
                customStyle={{
                  calendarContainer: {},
                  hasEventCircle: {
                    backgroundColor: "#00C8E4"
                  },
                  currentDayText: {
                    color: "#00C8E4"
                  },
                  weekendDayText: {
                    color: "#000"
                  },
                  day: {
                    color: "#000"
                  }
                }}
              />

              {this.state.employeesAvailabilityCheck &&
                !this.state.AddNewEmployee && (
                  <>
                    <Text
                      style={{
                        fontSize: 18,
                        marginLeft: 10,
                        marginVertical: 20,
                        fontWeight: "bold",
                        opacity: 0.5
                      }}
                    >
                      Employee Availability
                    </Text>
                    <View>
                      <Text
                        style={{
                          fontSize: 18,
                          marginLeft: 10,
                          marginVertical: 5,
                          fontWeight: "bold",
                          opacity: 0.5
                        }}
                      >
                        From: {this.state.employeesAvailability.time_from}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          marginLeft: 10,
                          marginVertical: 5,
                          fontWeight: "bold",
                          opacity: 0.5
                        }}
                      >
                        To: {this.state.employeesAvailability.time_to}
                      </Text>
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
                      AVAILABLE SERVICES
                    </Text>
                    <FlatList
                      data={this.state.availableServices}
                      renderItem={this.renderItem1}
                      keyExtractor={item => item.id}
                    />
                  </>
                )}

              {!this.state.AddNewEmployee && (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    marginTop: 10
                  }}
                >
                  <TouchableOpacity
                    onPress={this.getEmployeesAvailability}
                    style={{
                      backgroundColor: "#00C8E4",
                      padding: width * 0.03,
                      borderRadius: 5,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "700"
                      }}
                    >
                      {this.state.self
                        ? "Get Employee Availability"
                        : "Get Availability"}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.setState({ AddNewEmployee: true })}
                    style={{
                      backgroundColor: "#00C8E4",
                      padding: width * 0.03,
                      borderRadius: 5,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "700"
                      }}
                    >
                      {this.state.self
                        ? "Add Employee Availability"
                        : "Add Availability"}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              {this.state.AddNewEmployee && (
                <>
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
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      paddingHorizontal: 10,
                      justifyContent: "space-between"
                    }}
                  >
                    <View>
                      <Text style={{ color: "gray", marginBottom: 10 }}>
                        From (hh:mm){" "}
                      </Text>
                      <TouchableOpacity
                        style={{
                          borderWidth: 2,
                          borderColor: "#ddd",
                          height: 30,
                          padding: 5,
                          width: width / 2.3
                        }}
                        onPress={() => this.setState({ showFrom: true })}
                      >
                        <TextInput
                          placeholder="00:00"
                          value={this.state.from}
                          editable={false}
                        />
                      </TouchableOpacity>

                      {this.state.showFrom && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={this.state.date}
                          mode="time"
                          is24Hour={true}
                          display="default"
                          onChange={this.onChangeFrom}
                        />
                      )}
                    </View>
                    <View>
                      <Text style={{ color: "gray", marginBottom: 10 }}>
                        To (hh:mm){" "}
                      </Text>
                      <TouchableOpacity
                        style={{
                          borderWidth: 2,
                          borderColor: "#ddd",
                          height: 30,
                          padding: 5,
                          width: width / 2.3
                        }}
                        onPress={() => this.setState({ showTo: true })}
                      >
                        <TextInput
                          placeholder="00:00"
                          value={this.state.to}
                          editable={false}
                        />
                      </TouchableOpacity>

                      {this.state.showTo && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={this.state.date}
                          mode="time"
                          is24Hour={true}
                          display="default"
                          onChange={this.onChangeTo}
                        />
                      )}
                    </View>
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
                  <ScrollView>
                    {this.state.serviceData.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() =>
                          this.setState({ selected_service: item.id })
                        }
                        style={
                          this.state.selected_service === item.id
                            ? {
                                ...styles.item,
                                borderWidth: 1,
                                paddingHorizontal: 20
                              }
                            : styles.item
                        }
                      >
                        <View style={styles.buttonContainer}>
                          <Image
                            style={{
                              width: 108,
                              height: 108,
                              marginLeft: 15,
                              borderRadius: 5
                            }}
                            resizeMode={"cover"}
                            source={{
                              uri: `https://xionex.in/CarCare/public/vendor/upload/${item.image}`
                            }}
                          />
                          <View
                            style={{
                              width: "76%",
                              marginStart: 10,
                              marginEnd: 10
                            }}
                          >
                            <Text style={{ width: "50%", fontWeight: "bold" }}>
                              {item.name}
                            </Text>

                            <Text style={{ width: "50%", fontWeight: "bold" }}>
                              {item.price} AED{" "}
                            </Text>
                            <View style={{ alignItems: "flex-start" }}>
                              <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={parseInt(item.avg_rating)}
                                starSize={14}
                                starStyle={{
                                  color: "#FFB74D"
                                }}
                              />
                            </View>
                            <Text style={{ width: "98%", color: "#B3B3B3" }}>
                              {item.description}
                            </Text>
                            <Text style={{ width: "98%", color: "#808080" }}>
                              {item.updated_at}
                            </Text>
                          </View>
                        </View>
                        {this.state.selected_service === item.id && (
                          <View
                            style={{
                              position: "absolute",
                              top: -5,
                              right: -5,
                              backgroundColor: "#fff"
                            }}
                          >
                            <AntDesign
                              name="checkcircle"
                              size={25}
                              color="black"
                            />
                          </View>
                        )}
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                  <TouchableOpacity
                    onPress={this.addEmployeesAvailability}
                    style={{
                      backgroundColor: "#00C8E4",
                      padding: width * 0.03,
                      borderRadius: 5,
                      justifyContent: "center",
                      alignItems: "center",
                      marginVertical: 15
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "700"
                      }}
                    >
                      {this.state.self
                        ? "Add Employee Availability"
                        : "Add Availability"}
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </>
          ) : (
            <>
              {this.state.self && (
                <>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 10,
                      marginVertical: 20,
                      fontWeight: "bold"
                    }}
                  >
                    ADD EMPLOYEE & DISABILITY
                  </Text>
                  <Animated.View>
                    {!this.state.employeeList.length ? (
                      <TouchableOpacity
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
                          alignSelf: "center"
                        }}
                      >
                        <Image
                          style={{ height: 35, width: 35 }}
                          source={require("../../assets/add_service_Product.png")}
                        />
                      </TouchableOpacity>
                    ) : (
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                      >
                        {this.state.employeeList.map((item, index) => (
                          <View>
                            {index === 0 ? (
                              <TouchableOpacity
                                activeOpacity={1}
                                onPress={() =>
                                  this.setState({ modalVisible: true })
                                }
                                style={{
                                  width: width / 4,
                                  height: width / 4,
                                  borderRadius: 10,
                                  justifyContent: "center",
                                  alignItems: "center",
                                  backgroundColor: "#fff",
                                  elevation: 2,
                                  margin: 5,
                                  marginLeft: 50
                                }}
                              >
                                <Image
                                  style={{ height: 35, width: 35 }}
                                  source={require("../../assets/add_service_Product.png")}
                                />
                              </TouchableOpacity>
                            ) : (
                              <TouchableOpacity
                                onPress={() => {
                                  const d = moment().format("L");
                                  const m = String(d).slice(0, 2);
                                  const y = String(d).slice(6, 10);
                                  const f = y + "-" + m;
                                  this.setState({
                                    selected_emp: item.id,
                                    selected_month: f
                                  });
                                  this.getEmployeesDisability();
                                }}
                                style={{ margin: 5 }}
                              >
                                <Image
                                  style={{
                                    width: width / 4,
                                    height: width / 4,
                                    borderRadius: 10
                                  }}
                                  source={{
                                    uri: `https://xionex.in/CarCare/public/vendor/upload/${item.image}`
                                  }}
                                />
                                <Text
                                  style={{ textAlign: "center", marginTop: 5 }}
                                >
                                  {item.name}
                                </Text>
                                {this.state.selected_emp === item.id && (
                                  <View
                                    style={{
                                      position: "absolute",
                                      top: -5,
                                      right: -5,
                                      backgroundColor: "#fff"
                                    }}
                                  >
                                    <AntDesign
                                      name="checkcircle"
                                      size={20}
                                      color="black"
                                    />
                                  </View>
                                )}
                              </TouchableOpacity>
                            )}
                          </View>
                        ))}
                      </ScrollView>
                    )}
                  </Animated.View>
                </>
              )}

              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  marginVertical: 20,
                  fontWeight: "bold",
                  opacity: 0.5
                }}
              >
                DAYS DISABILITY
              </Text>
              <Calendar
                showEventIndicators
                showControls
                eventDates={this.state.employeesDisability}
                onDateSelect={date => {
                  const d = String(date).slice(0, 10);
                  this.setState({ selected_date: d });
                }}
                onTouchNext={date => {
                  const d = moment(date).format("L");
                  const m = String(d).slice(0, 2);
                  const y = String(d).slice(6, 10);
                  const f = y + "-" + m;
                  this.setState({
                    selected_month: f
                  });
                  this.getEmployeesDisability();
                }}
                onTouchPrev={date => {
                  const d = moment(date).format("L");
                  const m = String(d).slice(0, 2);
                  const y = String(d).slice(6, 10);
                  const f = y + "-" + m;
                  this.setState({
                    selected_month: f
                  });
                  this.getEmployeesDisability();
                }}
                customStyle={{
                  calendarContainer: {},
                  hasEventCircle: {
                    backgroundColor: "#00C8E4"
                  },
                  currentDayText: {
                    color: "#00C8E4"
                  },
                  weekendDayText: {
                    color: "#000"
                  },
                  day: {
                    color: "#000"
                  }
                }}
              />

              <TouchableOpacity
                onPress={this.disableEmployeesAvailability}
                style={{
                  backgroundColor: "#00C8E4",
                  padding: width * 0.03,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700"
                  }}
                >
                  Disable Availability
                </Text>
              </TouchableOpacity>
            </>
          )}
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
