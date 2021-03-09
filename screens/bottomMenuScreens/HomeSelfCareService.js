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
  ToastAndroid
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { URL } from "../../DomainConstant";
import StarRating from "react-native-star-rating";

class HomeSelfCareService extends React.Component {
  state = {
    data: [],
    user_id: ""
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

      fetch(`${URL}my-self-service`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            this.setState({ data: result.data });
          }
        })
        .catch(error => console.log("error", error));
    });
  };

  componentDidMount() {
    this.getData();
    const didFocusSubscription = this.props.navigation.addListener(
      "focus",
      () => {
        this.getData();
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

      fetch(`${URL}delete-self-service`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status) {
            this.getData();
            ToastAndroid.show(result.message, 2000);
          }
        })
        .catch(error => console.log("error====>", error));
    };
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SelfCareServiceDetails", {
            ID: item.id,
            USER_ID: this.state.user_id,
            items: item
          });
        }}
      >
        <View style={styles.item}>
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
              <View style={styles.buttonContainer}>
                <Text style={{ width: "80%", textAlign: "left" }}>
                  {item.name}
                </Text>
                <TouchableOpacity
                  style={{ borderRadius: 4 }}
                  onPress={() =>
                    navigation.navigate("SelfCareServiceDetails", {
                      ID: item.id,
                      USER_ID: this.state.user_id,
                      items: item
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
              <StarRating
                disabled={true}
                maxStars={5}
                rating={parseInt(item.avg_rating)}
                starSize={14}
                starStyle={{
                  color: "#FFB74D"
                }}
              />
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

  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
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
              {" "}
              Services{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddSelfCareService")}
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

          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={() => (
              <Text style={{ textAlign: "center" }}>NO DATA YET</Text>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

export default HomeSelfCareService;

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
