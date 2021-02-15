import React from 'react';
import { Text, View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import Home from '../screens/Main';
import Login from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import ForgetPassword from '../screens/ForgotPassword';
import EmpAvaility from '../screens/EmpAvaility';
import VerifyOtp from '../screens/VerifyOtp';
import Profile from '../screens/Profile';
import AddAccountWithButton from '../screens/AddAccountWithButton';
import AddBankAccount from '../screens/AddBankAccount';
import Notification from '../screens/Notification';
import Setting from '../screens/Setting';
import AddSelfCareService from '../screens/AddSelfCareService';
import PaymentActivity1 from '../screens/PaymentActivity1';
import ChangePassword from '../screens/ChangePassword';
import GenerateOfferCode from '../screens/GenerateOfferCode';
import BookingDetails from '../screens/BookingDetails';
import CarServiceDetails from '../screens/CarServiceDetails';
import PaymentActivity2 from '../screens/PaymentActivity2';

import { Images } from '../constants';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" //headerMode="screen"
    >
      <Stack.Screen
        name="Union Sequare"
        component={Home}
        options={{
          headerLeft: null,
          title: "Union Sequare",
          headerRight: () => (
            <Image resizeMode="cover" source={Images.NotificationIcon} style={{ width: 20, height: 25, marginRight: 25 }} />
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
            <Image resizeMode="cover" source={Images.NotificationIcon} style={{ width: 20, height: 25, marginRight: 25 }} />
          ),
          cardStyle: { backgroundColor: "#ffffff" }
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      {/* <Drawer.Screen name="EmpAvaility" component={EmpAvailityStack} /> */}
    </Drawer.Navigator>
  );
}

function NotificationStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Notification"
        component={Notification}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function BookingDetailsStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Booking Details"
        component={BookingDetails}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function CarServiceDetailsStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Booking Details"
        component={CarServiceDetails}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function OfferCodeStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Generate Offer Code"
        component={GenerateOfferCode}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function AddServiceStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="AddService"
        component={AddService}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function AddBankAccountFormStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="AddBankAccount"
        component={AddBankAccount}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
function AddBankAccountStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Bank Account"
        component={AddAccountWithButton}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function SettingStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Setting"
        component={Setting}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

export default function LoginStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none" >
      <Stack.Screen
        name="Login"
        component={Login}
        option={{
          headerShown: false,
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="VerifyOtp"
        component={VerifyOtp}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="AddAccountWithButton"
        component={AddAccountWithButton}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="PaymentActivity1"
        component={PaymentActivity1}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="AddSelfCareServiceStack" component={AddSelfCareService} />
      <Stack.Screen name="BookingDetailsStack" component={BookingDetailsStack} />
      <Stack.Screen name="CarServiceDetailsStack" component={CarServiceDetailsStack} />
      <Stack.Screen name="OfferCodeStack" component={OfferCodeStack} />
      <Stack.Screen name="NotificationStack" component={NotificationStack} />
      <Stack.Screen name="AddBankAccountStack" component={AddBankAccountStack} />
      <Stack.Screen name="AddBankAccountFormStack" component={AddBankAccountFormStack} />
      <Stack.Screen name="SettingStack" component={SettingStack} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

