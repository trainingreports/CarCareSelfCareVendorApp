import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home from "./bottomMenuScreens/Home";
import HomeSelfCareService from "./bottomMenuScreens/HomeSelfCareService";
import HomeMore from "./bottomMenuScreens/HomeMore";
import HomeOffer from "./bottomMenuScreens/HomeOffer";
import HomeRevenue from "./bottomMenuScreens/HomeRevenue";

//
import HomeCarCareService from "./bottomMenuScreens/HomeCarCareService";
import AsyncStorage from "@react-native-community/async-storage";
import { useState, useEffect } from "react";

const Tab = createMaterialBottomTabNavigator();

const Main = props => {
  const [role, setRole] = useState();
  const getRole = async () => {
    try {
      const value = await AsyncStorage.getItem("self");
      return value;
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getRole().then(role => {
      if (role === "true") {
        setRole(true);
      } else {
        setRole(false);
      }
    });
  }, [props]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#00C8E4"
      inactiveColor="#999999"
      barStyle={{
        backgroundColor: "#ffff"
      }}
      style={{
        backgroundColor: "#FFFFFF"
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "HOME",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="Manage Offers"
        component={HomeOffer}
        options={{
          tabBarLabel: "MANAGE OFFER",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={24} />
          )
        }}
      />
      {role ? (
        <Tab.Screen
          name="ADD SERVICE"
          component={HomeSelfCareService}
          options={{
            tabBarLabel: "ADD SERVICE",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={24} />
            )
          }}
        />
      ) : (
        <Tab.Screen
          name="ADD SERVICE"
          component={HomeCarCareService}
          options={{
            tabBarLabel: "ADD SERVICE",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={24} />
            )
          }}
        />
      )}
      <Tab.Screen
        name="REVENUE"
        component={HomeRevenue}
        options={{
          tabBarLabel: "REVENUE",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="adobe" color={color} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="MORE"
        component={HomeMore}
        options={{
          tabBarLabel: "MORE",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="more" color={color} size={24} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
