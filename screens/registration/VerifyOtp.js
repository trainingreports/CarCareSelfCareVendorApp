import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  Button
} from "react-native";

const VerifyOtp = ({ route, navigation }) => {
  const { phone } = route.params;
  const [otp, setOtp] = React.useState("");

  const handleClick = () => {
    if (otp) {
      var formdata = new FormData();
      formdata.append("phone", phone);
      formdata.append("otp", otp);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch("https://xionex.in/CarCare/api/v1/check-otp", requestOptions)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          if (response.status) {
            alert("New Password");
            navigation.navigate("ResetPassword");
          } else {
            alert(response.message);
          }
        })
        .catch(error => console.log("error", error));
    } else {
      alert("Empty submit");
    }
  };
  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={{
              width: 140,
              height: 140,
              marginTop: 26
            }}
            resizeMode={"cover"}
            source={require("../../assets/pic_icon_otp.png")}
          />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              marginTop: 56,
              fontWeight: "bold"
            }}
          >
            Verify Your Number
          </Text>
          <Text
            style={{
              marginStart: 8,
              marginBottom: 24,
              color: "#4D4D4D",
              marginTop: 13
            }}
          >
            OTP has been sent to your mobile number. Please Verify
          </Text>
          <TextInput
            style={{
              height: 40,
              width: "94%",
              padding: 10,
              borderRadius: 4,
              textAlign: "center",
              borderColor: "gray",
              backgroundColor: "#FFFFFF",
              borderWidth: 1
            }}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
          />
          <Text
            style={{
              color: "#00C8E4",
              marginTop: 10
            }}
          >
            Resend in 60 Seconds
          </Text>
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
            <Button title="Verify" color="#00C8E4" onPress={handleClick} />
          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
};

export default VerifyOtp;

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
