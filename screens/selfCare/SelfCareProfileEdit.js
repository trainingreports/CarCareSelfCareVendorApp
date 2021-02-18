import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";

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
  Picker
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const SelfCareProfileEdit = ({ navigation }) => {
  const [profile,setProfile] = useState({})
  const getId = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      return value;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getId().then(id => {
      var formdata = new FormData();
      formdata.append("user_id", id);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch(
        "https://xionex.in/CarCare/api/v1/get-business-info",
        requestOptions
      )
        .then(response => response.json())
        .then(result => {
          if(result.status){
            setProfile(result.data)
          }
        })
        .catch(error => console.log("error", error));
    });
  }, [navigation]);

  const handleClick = () => {
    var formdata = new FormData();
    formdata.append("user_id", profile.id);
    formdata.append("name", profile.name);
    formdata.append("business", profile.business);
    formdata.append("email", profile.email);
    formdata.append("phone", profile.phone);
    formdata.append("vertical", profile.vertical);
    formdata.append("place", profile.place);
    formdata.append("category", "1");
    formdata.append("subcategory", "4");
    formdata.append("cr_no", profile.cr_no);
    formdata.append("city", profile.city);
    formdata.append("country", profile.country);
    formdata.append("b_city", profile.b_city);
    formdata.append("b_state", profile.b_state);
    formdata.append("b_street", profile.b_street);
    formdata.append("description", profile.description);
    formdata.append("time_from", profile.time_from);
    formdata.append("time_to", profile.time_to);
    formdata.append("oldimage", "");
    formdata.append("oldcover", "");
    formdata.append("image", null);
    formdata.append("cover_photo", null);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://xionex.in/CarCare/api/v1/add-business-info", requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.status){
          alert(result.message)
        }
      })
      .catch(error => console.log('error', error));
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            height: 120,
            backgroundColor: "#00C8E4"
          }}
        />

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{
              width: 35,
              height: 35,
              marginEnd: 20,
              marginTop: -130,
              marginBottom: 16,
              borderColor: "#FFFFFF"
            }}
            resizeMode={"contain"}
            source={require("../../assets/13.1-4-6-More/edit_photo.png")}
          />

          <Image
            style={{
              width: 140,
              height: 140,
              marginTop: -70,
              borderWidth: 4,
              marginBottom: 16,
              backgroundColor: "#000000",
              borderRadius: 100,
              borderColor: "#FFFFFF"
            }}
            resizeMode={"contain"}
            source={require("../../assets/13.1-4-6-More/vendor_logo.png")}
          />

          <TouchableOpacity 
          onPress={handleClick}
          style={{
            width: 35,
            height: 35,
            marginStart: 20,
            marginTop: -130,
            marginBottom: 16,
            borderColor: "#FFFFFF"
          }}
          >
          <Image
            style={{
              width: 35,
              height: 35,
            }}
            resizeMode={"contain"}
            source={require("../../assets/13.1-4-6-More/save_profile.png")}
          />
          </TouchableOpacity>
        </View>

        <Text style={styles.textHeading}> {profile.business} </Text>
        <Text style={styles.textSubHeading}> {profile.city} - {profile.country} </Text>

        <Text style={styles.textHeading1}> BASIC INFO </Text>

        <Text style={styles.textLabel}> Name </Text>
        <TextInput style={styles.textInput} placeholder="Farhan Ali" 
        value={profile.name}
        onChangeText={name => setProfile({...profile,name})}
        />

        <Text style={styles.textLabel}> Busniess Name </Text>
        <TextInput style={styles.textInput} placeholder="Car Wash Center" />

        <Text style={styles.textLabel}> Email </Text>
        <TextInput
          style={styles.textInput}
          placeholder="carwash@gmail.com"
          value={profile.email}
        onChangeText={email => setProfile({...profile,email})}
        />

        <Text style={styles.textLabel}> Mobile Number </Text>
        <TextInput
          style={styles.textInput}
          placeholder="966 123456789"
          value={profile.phone}
          onChangeText={phone => setProfile({...profile,phone})}
        />

        {/* <Text style={styles.textLabel}> Vertical</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Car Care"
          defaultValue=""
        /> */}
        <Text style={styles.textLabel}> Vertical </Text>
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
            selectedValue={profile.vertical}
          >
            <Picker.Item
              label="Select"
              color="#B3B3B3"
              fontSize="10"
              value="Select"
            />
            <Picker.Item
              label="Self-care"
              color="#B3B3B3"
              fontSize="10"
              value="Self-care"
            />
            <Picker.Item
              label="Car-care"
              color="#B3B3B3"
              fontSize="10"
              value="Car-care"
            />
          </Picker>
        </View>

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
            //selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item
              label="Select Category"
              color="#B3B3B3"
              fontSize="10"
              value="Select Category"
            />
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
            //selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item
              label="Select"
              color="#B3B3B3"
              fontSize="10"
              value="Select SubCategory"
            />
          </Picker>
        </View>

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
            selectedValue={profile.place}
            onValueChange={(itemValue, itemIndex) =>
              setProfile({...profile,place:itemValue})
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

        <Text style={styles.textLabel}> CR Number </Text>
        <TextInput
          style={styles.textInput}
          placeholder="CR 56565655"
          value={profile.cr_no}
          onChangeText={cr_no => setProfile({...profile,cr_no})}
          
        />

        <Text style={styles.textLabel}> City </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Dubai"
          value={profile.city}
          onChangeText={city => setProfile({...profile,city})}
        />

        <Text style={styles.textLabel}> Country </Text>
        <TextInput style={styles.textInput} placeholder="UAE" 
         value={profile.country}
         onChangeText={country => setProfile({...profile,country})}
        />
        <Text style={styles.textHeading1}> BUSNIESS ADDRESS </Text>
        <Text style={styles.textLabel}> City </Text>
        <TextInput
          style={styles.textInput}
          placeholder="City"
          value={profile.b_city}
          onChangeText={b_city => setProfile({...profile,b_city})}
        />

        <Text style={styles.textLabel}> State </Text>
        <TextInput
          style={styles.textInput}
          placeholder="State"
          value={profile.b_state}
          onChangeText={b_state => setProfile({...profile,b_state})}
        />

        <Text style={styles.textLabel}> Street (Include House Number) </Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter Street"
          numberOfLines={10}
          multiline={true}
          value={profile.b_street}
          onChangeText={b_street => setProfile({...profile,b_street})}
        />

        <Text style={styles.textHeading1}> BUSNIESS ADDRESS </Text>
        <Text style={styles.textLabel}> Description </Text>
        <TextInput
          style={styles.textArea}
          placeholder="Write something about business..."
          numberOfLines={10}
          multiline={true}
          value={profile.description}
          onChangeText={description => setProfile({...profile,description})}
        />
        <Text
          style={{
            width: "94%",
            textAlign: "left",
            fontSize: 11
          }}
        >
          {" "}
          Max 1500 words{" "}
        </Text>

        <Text style={styles.textHeading1}> BUSNIESS TIME </Text>
        <Text style={styles.textLabel}> FROM </Text>
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
            placeholder="00:00 AM"
            value={profile.time_from}
            onChangeText={time_from => setProfile({...profile,time_from})}
          />
          <Text style={{ padding: 10, color: "#999999" }}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginTop: 1
              }}
              resizeMode={"cover"}
              source={require("../../assets/13.1-4-6-More/clock_2.png")}
            />
          </Text>
        </View>

        <Text style={styles.textLabel}> TO </Text>
        <View
          style={[
            {
              width: "94%",
              marginStart: 10,
              marginEnd: 10,
              //marginBottom:100,
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
            placeholder="00:00 PM"
            value={profile.time_to}
            onChangeText={time_to => setProfile({...profile,time_to})}
          />
          <Text style={{ padding: 10, color: "#999999" }}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginTop: 1
              }}
              resizeMode={"cover"}
              source={require("../../assets/13.1-4-6-More/clock_2.png")}
            />
          </Text>
        </View>

        <Text style={styles.textLabel}>Cover Photo</Text>
        <Image
          style={{
            width: "94%",
            height: 200,
            marginTop: 1
          }}
          resizeMode={"cover"}
          source={require("../../assets/9.4-Service-Add/image_placeholder.png")}
        />

        <Text style={styles.textHeading1}> SERVICE ALLOWED </Text>
        <Text style={styles.textLabel}> Gender </Text>

        <View style={styles.rawContainer}>
          <View style={styles.checkboxContainer}>
            <CheckBox style={styles.checkbox} />
            <Text style={styles.label}> Male</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox style={styles.checkbox} />
            <Text style={styles.label}> Female</Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

export default SelfCareProfileEdit;

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
    marginBottom: 20,
    marginEnd: 20
  },

  textHeading1: {
    fontSize: 18,
    marginBottom: 2,
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "left",
    width: "94%",
    color: "#999999"
  },
  textHeading: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "center",
    width: "94%",
    color: "#000000"
  },
  textSubHeading: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
    width: "94%",
    color: "#999999"
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
  textArea: {
    width: "94%",
    padding: 10,
    borderRadius: 4,
    borderColor: "gray",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    height: 150,
    justifyContent: "flex-start"
  },
  checkbox: {
    alignSelf: "center"
  },
  label: {
    margin: 8
  },
  rawContainer: {
    width: "90%",
    flexDirection: "row"
  }
});
