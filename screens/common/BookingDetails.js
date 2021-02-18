import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  Rating,
  AirbnbRating
} from "react-native";

class BookingDetails extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="auto" />

          <Text
            style={{
              width: "96%",
              color: "#999999",
              fontSize: 12,
              marginTop: 8
            }}
          >
            {" "}
            Booking ID - 45763{" "}
          </Text>
          <Text
            style={{
              width: "96%",
              color: "#999999",
              fontSize: 12,
              marginTop: 4
            }}
          >
            {" "}
            15 August 2020, 05:30 PM{" "}
          </Text>
          <View style={styles.buttonContainer}></View>

          <View style={{ flexDirection: "row", width: "98%", marginTop: 8 }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 100
              }}
              resizeMode={"cover"}
              source={require("../../assets/customer_pic_2.png")}
            />

            <View
              style={{
                marginStart: 10,
                marginTop: 4
              }}
            >
              <Text style={{ fontWeight: "bold" }}> Alex Jenus </Text>
              <Text style={{ color: "#999999", fontSize: 12 }}>
                +91 9458974385
              </Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#E6E6E6",
              marginBottom: 16,
              marginTop: 16,
              width: "100%",
              borderBottomWidth: 1
            }}
          />

          <View style={{ width: "96%", flexDirection: "row" }}>
            <View
              style={{
                width: "48%",
                flexDirection: "row"
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: "#999999",
                  paddingStart: 16,
                  paddingEnd: 16,
                  backgroundColor: "#E6E6E6",
                  borderRadius: 12
                }}
              >
                {" "}
                Gender{" "}
              </Text>
              <Text style={{ fontSize: 11, color: "#999999" }}> Male </Text>
            </View>

            <View
              style={{
                width: "50%",
                flexDirection: "row",
                justifyContent: "flex-end"
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: "#999999",
                  paddingStart: 16,
                  paddingEnd: 16,
                  backgroundColor: "#E6E6E6",
                  borderRadius: 12
                }}
              >
                {" "}
                Status{" "}
              </Text>
              <Text style={{ fontSize: 11, color: "#999999" }}>
                {" "}
                Requested{" "}
              </Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#E6E6E6",
              marginBottom: 16,
              marginTop: 16,
              width: "100%",
              borderBottomWidth: 1
            }}
          />

          <View style={{ flexDirection: "row", width: "98%" }}>
            <Image
              style={{
                width: 50,
                height: 50
              }}
              resizeMode={"cover"}
              source={require("../../assets/app-icon.jpg")}
            />

            <View
              style={{
                marginStart: 10,
                marginTop: 4
              }}
            >
              <Text style={{ fontWeight: "bold" }}> Dental </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 10,
                  backgroundColor: "#FF3B30",
                  textAlign: "center",
                  borderRadius: 50,
                  paddingStart: 8,
                  paddingEnd: 8
                }}
              >
                40 % OFF
              </Text>

              <View
                style={{
                  marginTop: 4,
                  flexDirection: "row",
                  flex: 1
                }}
              >
                <Text style={{ color: "#00C8E4" }}> 300 AED </Text>
                <Text style={{}}>1 Hrs 30 Min</Text>
              </View>
            </View>
          </View>

          <Text
            style={{
              width: "98%",
              color: "#999999",
              fontSize: 12,
              fontWeight: "bold",
              marginTop: 16,
              marginBottom: 16
            }}
          >
            {" "}
            DATE & TIME APPPOINTMENT{" "}
          </Text>

          <View
            style={{
              width: "98%",
              borderWidth: 1,
              padding: 8,
              borderColor: "#00C8E4"
            }}
          >
            <View style={styles.buttonContainer}>
              <Text
                style={{ width: "50%", color: "#00C8E4", fontWeight: "bold" }}
              >
                {" "}
                15 OCT 2020{" "}
              </Text>
              <Text
                style={{
                  width: "50%",
                  color: "#00C8E4",
                  fontWeight: "bold",
                  textAlign: "right"
                }}
              >
                {" "}
                Thursday{" "}
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: "#00C8E4",
                marginTop: 16,
                marginBottom: 6,
                width: "100%",
                borderBottomWidth: 1
              }}
            />

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                padding: 8,
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  width: "50%",
                  color: "#FFFFFF",
                  textAlign: "center",
                  padding: 8,
                  marginEnd: 4,
                  borderRadius: 4,
                  backgroundColor: "#00C8E4"
                }}
              >
                {" "}
                11:00 PM-12:00 PM{" "}
              </Text>
              <Text
                style={{
                  width: "50%",
                  color: "#FFFFFF",
                  textAlign: "center",
                  padding: 8,
                  marginStart: 4,
                  borderRadius: 4,
                  marginEnd: 4,
                  backgroundColor: "#00C8E4"
                }}
              >
                {" "}
                11:00 PM-12:00 PM{" "}
              </Text>
            </View>
          </View>

          <Text
            style={{
              width: "98%",
              color: "#999999",
              fontSize: 12,
              fontWeight: "bold",
              marginTop: 24
            }}
          >
            {" "}
            SELECTED FOR JOB{" "}
          </Text>

          <View style={{ flexDirection: "row", width: "98%", marginTop: 8 }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 100
              }}
              resizeMode={"cover"}
              source={require("../../assets/customer_pic_2.png")}
            />

            <View
              style={{
                marginStart: 10,
                marginTop: 4
              }}
            >
              <Text style={{ fontWeight: "bold" }}> Dr. Arman Ali </Text>
              <Text style={{ color: "#999999", fontSize: 12 }}>
                +91 9458974385
              </Text>
            </View>
          </View>

          <View></View>

          <View
            style={{
              width: "98%",
              padding: 8,
              marginTop: 24,
              marginBottom: 16,
              borderRadius: 4,
              shadowColor: "#000000",
              shadowOffset: {
                width: 0,
                height: 1
              },
              shadowRadius: 5,
              shadowOpacity: 1.0,
              backgroundColor: "#FFFFFF"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 8,
                width: "100%",
                justifyContent: "center"
              }}
            >
              <Text style={{ width: "100%", textAlign: "left" }}>
                {" "}
                Subtotal{" "}
              </Text>
              <Text style={{ width: "100%", textAlign: "right" }}>
                {" "}
                300.00{" "}
              </Text>
              <Text style={{ width: "100%", textAlign: "right" }}> AED </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 8,
                width: "100%",
                justifyContent: "center"
              }}
            >
              <Text style={{ width: "100%", textAlign: "left" }}>
                {" "}
                Subtotal{" "}
              </Text>
              <Text style={{ width: "100%", textAlign: "right" }}>
                {" "}
                300.00{" "}
              </Text>
              <Text style={{ width: "100%", textAlign: "right" }}> AED </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 8,
                width: "100%",
                justifyContent: "center"
              }}
            >
              <Text
                style={{ width: "100%", color: "#00C8E4", textAlign: "left" }}
              >
                {" "}
                Subtotal{" "}
              </Text>
              <Text
                style={{ width: "100%", color: "#00C8E4", textAlign: "right" }}
              >
                {" "}
                300.00{" "}
              </Text>
              <Text
                style={{ width: "100%", color: "#00C8E4", textAlign: "right" }}
              >
                {" "}
                AED{" "}
              </Text>
            </View>
          </View>

          <Text
            style={{
              width: "98%",
              color: "#999999",
              fontWeight: "bold",
              marginTop: 24
            }}
          >
            {" "}
            PAYMENT{" "}
          </Text>

          <Text
            style={{
              width: "98%",
              color: "#333333",
              marginTop: 4
            }}
          >
            {" "}
            Payment by Wallet{" "}
          </Text>

          <View
            style={{
              borderBottomColor: "#999999",
              marginTop: 16,
              width: "100%",
              borderBottomWidth: 1
            }}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={
                () => navigation.goback() //navigation.dispatch(StackActions.pop())
              }
              style={{
                width: "50%",
                padding: 7,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  width: "49%",
                  fontSize: 14,
                  color: "#FF3B30",
                  margin: 6,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                {" "}
                DECLINE{" "}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: "#909090",
                height: "100%",
                width: 1
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.goback()} //navigation.dispatch(StackActions.pop())}
              style={{
                width: "49%",
                padding: 7,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  width: "50%",
                  fontSize: 14,
                  color: "#8CC63F",
                  margin: 6,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                {" "}
                ACCEPT{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default BookingDetails;

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
    width: "94%",
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
