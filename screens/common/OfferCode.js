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

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 8,
            marginTop: 16,
            width: "94%",
            fontWeight: "bold"
          }}
        >
          Generate Offer Code
        </Text>

        <Text
          style={{
            textAlign: "left",
            marginStart: 8,
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
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
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
          <Button
            title="SUBMIT"
            color="#00C8E4"
            onPress={() =>
              navigation.navigate("ForgotPassword", { name: "Jane" })
            }
          />
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

export default App;

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
