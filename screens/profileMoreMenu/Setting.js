
import { StatusBar } from 'expo-status-bar';

//import * as React from 'react';
import React, { useState } from "react";
import { Text, Switch, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, SafeAreaView, FlatList, Image, Rating, AirbnbRating } from 'react-native';

class Setting extends React.Component {
  render() {
    const navigation = this.props.navigation;

    //const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    //const [isEnabled, setIsEnabled] = useState(false);

    return (
      <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* <Text style={styles.labelHeading}>Settings</Text> */}

          <View style={{
            width: '90%',
            flexDirection: 'row',
            marginTop:16
          }}>
            <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/notifications_1.png')} />
          <Text style={styles.label}>Notifications</Text>
          <Switch
            style={{ alignSelf: 'flex-end' }}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
          ////onValueChange={toggleSwitch}
          //value={isEnabled}
          />
        </View>

        <View style={styles.view} />

        <View style={styles.rawContainer}>
          <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/edit_profile.png')} />
          <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.label}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view} />

        <View style={styles.rawContainer}>
          <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/change_pw.png')} />
          <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('ChangePassword')}>
            <Text style={styles.label}>Change Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view} />

        <StatusBar style="auto" />
        </View>

      </ScrollView >

    );
  }
}

export default Setting;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelHeading: {
    width: '94%',
    fontSize: 18,
    marginBottom: 24,
    marginTop: 24,
    fontWeight: 'bold'
  },
  rawContainer: {
    width: '90%',
    flexDirection: 'row',
  },
  icon: {
    width: 22,
    height: 22,
    marginEnd: 16
  },
  label: {
    width: "80%",
    fontSize: 18,
    color: '#4D4D4D',
    justifyContent: 'center'
  },
  view: {
    width: "90%",
    marginBottom: 16,
    marginTop: 16,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
  },
});
