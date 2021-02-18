import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import Home from "../screens/Main";
import Login from "../screens/registration/LogIn";
import SignUp from "../screens/registration/SignUp";
import ForgetPassword from "../screens/registration/ForgotPassword";
import EmpAvaility from "../screens/selfCare/SelfCareEmpAvaility";
import VerifyOtp from "../screens/registration/VerifyOtp";
import Profile from "../screens/selfCare/ProfileSelfCare";
import SelfCareProfileEdit from "../screens/selfCare/SelfCareProfileEdit";
import AddAccountWithButton from "../screens/profileMoreMenu/AddAccountWithButton";
import AddBankAccount from "../screens/profileMoreMenu/AddBankAccount";
import Notification from "../screens/profileMoreMenu/Notification";
import Setting from "../screens/profileMoreMenu/Setting";
import AddSelfCareService from "../screens/selfCare/AddSelfCareService";
import PaymentActivity1 from "../screens/profileMoreMenu/PaymentActivity1";
import ChangePassword from "../screens/profileMoreMenu/ChangePassword";
import GenerateOfferCode from "../screens/common/GenerateOfferCode";
import BookingDetails from "../screens/common/BookingDetails";
import SelfCareServiceDetails from "../screens/selfCare/SelfCareServiceDetails";
import PaymentActivity2 from "../screens/profileMoreMenu/PaymentActivity2";

//CAR CARE SERVICES >IMPORTS

import AddCarService from "../screens/carCare/AddCarService";
import AddCarCareProduct from "../screens/carCare/AddCarCareProduct";
import CarcareEmpAvaility from "../screens/carCare/CarcareEmpAvaility";
import CarCareProductDetails from "../screens/carCare/CarCareProductDetails";
import CarCareProfileEdit from "../screens/carCare/CarCareProfileEdit";
import CarCareServiceList from "../screens/carCare/CarCareServiceList";
import CarServicekp from "../screens/carCare/CarServicekp";
import ServicePrductBooking from "../screens/carCare/ServicePrductBooking";

import AsyncStorage from "@react-native-community/async-storage";

import { Images } from "../constants";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator
      mode="card" //headerMode="screen"
    >
      <Stack.Screen
        name="Union Sequare"
        component={Home}
        options={{
          headerLeft: null,
          title: "Union Sequare",
          headerRight: () => (
            <Image
              resizeMode="cover"
              source={Images.NotificationIcon}
              style={{ width: 20, height: 25, marginRight: 25 }}
            />
          ),
          cardStyle: { backgroundColor: "#ffffff" }
          //headerTransparent: true,

          // header: ({ navigation, scene }) => (
          //   <View style={{
          //     width: '100%',
          //     justifyContent: 'center',
          //     alignItems: 'center',
          //     padding: 16,
          //     marginTop: 32,
          //     flexDirection:'row',
          //     backgroundColor: '#FFFFFF',
          //     shadowColor: '#000000',
          //     shadowOffset: {
          //       width: 0,
          //       height: 1
          //     },
          //     shadowRadius: 5,
          //     shadowOpacity: 1.0
          //   }}>
          //     <Image
          //       style={{width:20, height:20}}
          //       resizeMode={'cover'}
          //       source={require('../assets/app-icon.jpg')}
          //     />
          //     <Text style={{ fontSize: 16, backgroundColor: '#FFFFFF' }}> Union Square..</Text>
          //   </View>
          // ),
          //cardStyle: { backgroundColor: "#ffffff" }
        }}
      />
    </Stack.Navigator>
  );
}

function EmpAvailityStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="EmpAvaility"
        component={EmpAvaility}
        options={{
          title: "EmpAvaility",
          headerRight: () => (
            <Image
              resizeMode="cover"
              source={Images.NotificationIcon}
              style={{ width: 20, height: 25, marginRight: 25 }}
            />
          ),
          cardStyle: { backgroundColor: "#ffffff" }
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="EmpAvaility" component={EmpAvailityStack} />
    </Drawer.Navigator>
  );
}

export default function LoginStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="VerifyOtp"
        component={VerifyOtp}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="AddAccountWithButton"
        component={AddAccountWithButton}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="PaymentActivity1"
        component={PaymentActivity1}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="ProfileEdit" component={SelfCareProfileEdit} />
      <Stack.Screen
        name="SelfCareServiceDetails"
        component={SelfCareServiceDetails}
      />
      <Stack.Screen name="AddSelfCareService" component={AddSelfCareService} />
      <Stack.Screen name="BookingDetailsStack" component={BookingDetails} />
      <Stack.Screen
        name="CarProductDetails"
        component={CarCareProductDetails}
      />
      <Stack.Screen name="GenerateOfferCode" component={GenerateOfferCode} />
      <Stack.Screen name="NotificationStack" component={Notification} />
      <Stack.Screen
        name="AddBankAccountStack"
        component={AddAccountWithButton}
      />
      <Stack.Screen name="AddBankAccountFormStack" component={AddBankAccount} />
      <Stack.Screen name="SettingStack" component={Setting} />
      <Stack.Screen
        name="App"
        component={AppStack}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen name="AddCarService" component={AddCarService} />
      <Stack.Screen name="CarcareEmpAvaility" component={CarcareEmpAvaility} />
      <Stack.Screen
        name="CarCareProductDetails"
        component={CarCareProductDetails}
      />
      <Stack.Screen name="CarCareProfileEdit" component={CarCareProfileEdit} />
      <Stack.Screen name="CarCareServiceList" component={CarCareServiceList} />
      <Stack.Screen name="CarServicekp" component={CarServicekp} />
      <Stack.Screen
        name="ServicePrductBooking"
        component={ServicePrductBooking}
      />
    </Stack.Navigator>
  );
}
