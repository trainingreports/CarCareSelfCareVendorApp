import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ToastAndroid
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const { width } = Dimensions.get("screen");

class HomeCarCareService extends React.Component {
  state = {
    serviceData: [],
    productData: [],
    user_id: "",
    services: true
  };

  getRole = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      return value;
    } catch (e) {
      console.log(e);
    }
  };

  getData = () => {
    this.getRole().then(id => {
      this.setState({ user_id: id });
      var formdata = new FormData();
      formdata.append("user_id", id);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch("https://xionex.in/CarCare/api/v1/my-car-service", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            this.setState({ serviceData: result.data });
          }
        })
        .catch(error => console.log("error", error));
    });
  };

  getProducts = () => {
    this.getRole().then(id => {
      var formdata = new FormData();
      formdata.append("user_id", id);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch("https://xionex.in/CarCare/api/v1/my-product", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            this.setState({ productData: result.data });
          }
        })
        .catch(error => console.log("error", error));
    });
  };

  componentDidMount() {
    this.getData();
    this.getProducts();
    const didFocusSubscription = this.props.navigation.addListener(
      "focus",
      () => {
        this.getData();
        this.getProducts();
      }
    );
  }

  renderItem = ({ item }) => {
    const navigation = this.props.navigation;
    const deleteItem = () => {
      var formdata = new FormData();
      formdata.append("user_id", item.user_id);
      formdata.append("service_id", item.id);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch(
        "https://xionex.in/CarCare/api/v1/delete-car-service",
        requestOptions
      )
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            this.getData();
            ToastAndroid.show(result.message,2000);
          }
        })
        .catch(error => console.log("error", error));
    };
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CarCareProductDetails", {
            ID: item.id,
            USER_ID: this.state.user_id,
            items: item,
            services: this.state.services
          });
        }}
      >
        <View style={styles.item}>
          <View style={styles.buttonContainer}>
            <Image
              style={{
                width: 108,
                height: 108,
                marginLeft:15,
                borderRadius:5
              }}
              resizeMode={"cover"}
              source={{ uri:`https://xionex.in/CarCare/public/vendor/upload/${item.image}` }}
            />
            <View style={{ width: "76%", marginStart: 10, marginEnd: 10 }}>
              <View style={styles.buttonContainer}>
                <Text style={{ width: "80%", textAlign: "left" }}>
                  {item.name}
                </Text>
                <TouchableOpacity
                  style={{ borderRadius: 4 }}
                  onPress={() =>
                    navigation.navigate("CarCareProductDetails", {
                      ID: item.id,
                      USER_ID: this.state.user_id,
                      items: item,
                      services: this.state.services
                    })
                  }
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
                  onPress={deleteItem}
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
              <Text style={{ width: "50%", fontWeight: "bold" }}>
                {item.price} AED{" "}
              </Text>
              <Text style={{ width: "98%", color: "#B3B3B3" }}>
                {item.description}
              </Text>
              <Text style={{ width: "98%", color: "#808080" }}>
                {item.updated_at}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  renderProducts = item => {
    const navigation = this.props.navigation;

    const deleteItem = () => {
      var formdata = new FormData();
      formdata.append("user_id", item.user_id);
      formdata.append("product_id", item.id);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch("https://xionex.in/CarCare/api/v1/delete-product", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            this.getProducts();
            ToastAndroid.show(result.message,2000);
          }
        })
        .catch(error => console.log("error", error));
    };
    return (
      <TouchableOpacity
        style={{
          width: width * 0.45,
          height: width * 0.6,
          margin: width * 0.015,
          marginTop: width * 0.03,
          borderRadius: 10,
          backgroundColor: "#fff"
        }}
        onPress={() => {
          navigation.navigate("CarCareProductDetails", {
            ID: item.id,
            USER_ID: this.state.user_id,
            items: item,
            services: this.state.services
          });
        }}
      >
        <ImageBackground
          style={{ width: width * 0.45, height: width * 0.28 }}
          imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
         
          source={
            item.image
              ? { uri:`https://xionex.in/CarCare/public/vendor/upload/${item.image}` }
              : require("../../assets/self_service_pic_2.png")
          }
        >
          {item.discount !== "" && (
            <View
              style={{
                backgroundColor: "red",
                paddingVertical: 5,
                paddingHorizontal: 6,
                borderRadius: 100,
                position: "absolute",
                margin: 12
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  color: "#fff",
                  fontWeight: "bold"
                }}
              >
                {item.discount}
                <Text style={{ fontSize: 9 }}>%</Text>
              </Text>
              <Text
                style={{
                  fontSize: 8,
                  color: "#fff",
                  fontWeight: "bold",
                  marginTop: -5,
                  marginLeft: 4
                }}
              >
                OFF
              </Text>
            </View>
          )}
        </ImageBackground>
        <View style={{ padding: 10 }}>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 18,
              color: "gray",
              marginBottom: 5,
              height: width * 0.11
            }}
          >
            {item.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "gray",
              marginBottom: 5,
              height: width * 0.06
            }}
          >
            {item.price} AUD
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity
                style={{
                  width: 27,
                  height: 27,
                  borderRadius: 27,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#00C8E4"
                }}
                onPress={() =>
                  navigation.navigate("CarCareProductDetails", {
                    ID: item.id,
                    USER_ID: this.state.user_id,
                    items: item,
                    services: this.state.services
                  })
                }
              >
                <Image
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 26
                  }}
                  resizeMode={"cover"}
                  source={require("../../assets/edit.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={deleteItem}
                style={{
                  width: 27,
                  height: 27,
                  borderRadius: 27,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#00C8E4",
                  marginLeft: 5
                }}
              >
                <Image
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 26
                  }}
                  resizeMode={"cover"}
                  source={require("../../assets/delete.png")}
                />
              </TouchableOpacity>
            </View>
            {item.quantity > 0 ? (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  borderRadius: 100,
                  paddingHorizontal: 8,
                  paddingVertical: 2
                }}
              >
                <Text style={{ color: "green" }}>In Stock</Text>
              </View>
            ) : (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  borderRadius: 100,
                  paddingHorizontal: 5,
                  paddingVertical: 2
                }}
              >
                <Text style={{ color: "red" }}>Out of Stock</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.buttonContainer, { marginTop: 16 }]}>
            <TouchableOpacity
              onPress={() => this.setState({ services: true })}
              style={
                this.state.services
                  ? {
                      ...styles.buttonStyleWhite,
                      backgroundColor: "#00C8E4"
                    }
                  : styles.buttonStyleWhite
              }
            >
              <Text
                style={
                  this.state.services
                    ? {
                        textAlign: "center",
                        fontWeight: "bold",
                        padding: 10,
                        color: "#FFFFFF"
                      }
                    : {
                        textAlign: "center",
                        fontWeight: "bold",
                        padding: 10,
                        color: "#000"
                      }
                }
              >
                Service
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ services: false })}
              style={
                !this.state.services
                  ? {
                      ...styles.buttonStyleWhite,
                      backgroundColor: "#00C8E4"
                    }
                  : styles.buttonStyleWhite
              }
            >
              <Text
                style={
                  !this.state.services
                    ? {
                        textAlign: "center",
                        fontWeight: "bold",
                        padding: 10,
                        color: "#FFFFFF"
                      }
                    : {
                        textAlign: "center",
                        fontWeight: "bold",
                        padding: 10,
                        color: "#000"
                      }
                }
              >
                Product
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <Text
              style={{
                width: "82%",
                fontSize: 18,
                marginStart: 16,
                marginBottom: 16,
                marginTop: 16,
                alignSelf: "flex-start",
                fontWeight: "bold"
              }}
            >
              {this.state.services ? `Services` : `Products`}
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AddCarService", {
                  services: this.state.services
                })
              }
            >
              <Image
                style={{
                  width: 22,
                  height: 22,
                  marginEnd: 32
                }}
                resizeMode={"cover"}
                source={require("../../assets/add_service_Product.png")}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomColor: "#E6E6E6",
              width: "100%",
              borderBottomWidth: 1
            }}
          />
          {this.state.services ? (
            <FlatList
              data={this.state.serviceData}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              ListEmptyComponent={() => (
                <Text style={{ textAlign: "center" }}>No Data Found</Text>
              )}
            />
          ) : this.state.productData.length === 0 ? (
            <Text style={{ textAlign: "center", color: "#000" }}>
              No Data Found
            </Text>
          ) : (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignSelf: "flex-start"
              }}
            >
              {this.state.productData.map((item, i) =>
                this.renderProducts(item)
              )}
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}
export default HomeCarCareService;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 66,
    height: 58
  },
  buttonContainer: {
    width: "92%",
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
    alignSelf: "flex-start",
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
