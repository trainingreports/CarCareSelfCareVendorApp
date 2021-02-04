// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';

import ServicePage from '../pages/ServicePage';
import AboutUsPage from '../pages/AboutUsPage';
import ReviewsPage from '../pages/ReviewsPage';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <NavigationContainer independent={true}>

      <ScrollView>

        <View style={styles.containerImage}>
          <Image
            style={{
              width: '100%',
              height: 200,
            }}
            resizeMode={'cover'}
            source={require('../assets/13.2-3-5-Car-Service-Profile/service_pic001.png')}
          />


          <View style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: -30,
          }}>
            <Text style={{ width: '70%', color: '#FFFFFF', marginStart: 12 }}>10:00 AM - 6:00 MP</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 12, borderRadius: 2, paddingStart: 4, paddingEnd: 4, backgroundColor: '#FF3B30' }}>Male</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 12, borderRadius: 2, paddingStart: 4, paddingEnd: 4, backgroundColor: '#8CC63F', marginStart: 4 }}>Female</Text>
          </View>

          <View style={{
            width: '95%',
            flexDirection: 'row',
            marginTop: 16
          }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 4,
                marginTop: 4
              }}
              resizeMode={'cover'}
              source={require('../assets/13.1-4-6-More/vendor_logo.png')}
            />
            <View style={{ width: '90%', marginStart: 10 }}>
              <Text style={{ fontSize: 18 }}>Car Wash Center</Text>
              <View style={{ width: '90%', flexDirection: 'row' }}>
                <Text style={{ width: '88%', fontSize: 16, color: '#999999' }}>Dubai- UAE</Text>
                <Image
                  style={{
                    width: 18,
                    height: 18,
                    marginEnd: 4
                  }}
                  resizeMode={'cover'}
                  source={require('../assets/13.2-3-5-Car-Service-Profile/star_sky.png')}
                />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#00C8E4' }}>4.5</Text>
              </View>
            </View>

          </View>

          <View style={{
            width: "100%",
            marginBottom: 16,
            marginTop: 16,
            borderBottomColor: '#E6E6E6',
            borderBottomWidth: 1,
          }} />
        </View>

        <Tab.Navigator
          initialRouteName="ServicePage"
          tabBarOptions={{
            activeTintColor: '#00C8E4',
            inactiveTintColor: '#999999',
            style: {
              backgroundColor: '#FFFFFF',
            },
            labelStyle: {
              textAlign: 'center',
            },
            indicatorStyle: {
              borderBottomColor: '#00C8E4',
              borderBottomWidth: 2,
            },
          }}>
          <Tab.Screen
            name="ServicePage"
            component={ServicePage}
            options={{
              tabBarLabel: 'SERVICE',
              // tabBarIcon: ({ color, size }) => (
              //   <MaterialCommunityIcons name="home" color={color} size={size} />
              // ),
            }} />
          <Tab.Screen
            name="AboutUsPage"
            component={AboutUsPage}
            options={{
              tabBarLabel: 'ABOUT US',
              // tabBarIcon: ({ color, size }) => (
              //   <MaterialCommunityIcons name="settings" color={color} size={size} />
              // ),
            }} />
          <Tab.Screen
            name="ReviewsPage"
            component={ReviewsPage}
            options={{
              tabBarLabel: 'REVIEW',
              // tabBarIcon: ({ color, size }) => (
              //   <MaterialCommunityIcons name="settings" color={color} size={size} />
              // ),
            }} />
        </Tab.Navigator>
      </ScrollView>
    </NavigationContainer>
  );
}

class Profile extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerStyle: { backgroundColor: '#FFFFFF' },
          headerTintColor: '#00C8E4',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'Service' }} />
      </Stack.Navigator>
      // <NavigationContainer>

      // </NavigationContainer>
    );
  }
}

export default Profile;


const styles = StyleSheet.create({
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  logo: {
    width: 66,
    height: 58,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  textHeading: {
    fontSize: 18,
    marginBottom: 16,
    marginTop: 32,
    fontWeight: 'bold'
  },
  textLabel: {
    textAlign: 'left',
    marginStart: 8,
    marginBottom: 8,
    color: '#4D4D4D',
    marginTop: 16,
    fontWeight: 'bold',
    width: "94%",
  },
  textInput: {
    height: 40,
    width: "94%",
    padding: 10,
    borderRadius: 4,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
  }
});
