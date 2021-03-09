import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import ServicePage from '../profilePages/ServicePage';
import AboutUsPage from '../profilePages/AboutUsPage';
import ReviewsPage from '../profilePages/ReviewsPage';
import AsyncStorage from '@react-native-community/async-storage';
import{URL} from '../../DomainConstant';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// function TabStack(navigation) {

class TabStack extends React.Component {
  state={
    profile:{}
  }

  getId = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      return value;
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount(){
    this.getId().then(id => {
      var formdata = new FormData();
      formdata.append("user_id", id);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch(
        `${URL}get-business-info`,
        requestOptions
      )
        .then(response => response.json())
        .then(result => {
          if(result.status){
            this.setState({profile:{...result.data,image:`https://xionex.in/CarCare/public/vendor/upload/${result.data.image}`,
            cover_photo:`https://xionex.in/CarCare/public/vendor/upload/${result.data.cover_photo}`}})
            }
        })
        .catch(error => console.log("error", error));
    });
  }
  render() {
    const navigation = this.props.navigation;
    const {profile} = this.state;

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
              source={profile.cover_photo?{uri:profile.cover_photo}:
              require('../../assets/13.2-3-5-Car-Service-Profile/service_pic001.png')}
            />

            <View style={{
              width: '100%',
              flexDirection: 'row',
              marginTop: -30,
            }}>
              <Text style={{ width: '70%', color: '#FFFFFF', marginStart: 12 }}>{profile.time_from} - {profile.time_to}</Text>
              {String(profile.gender).toLowerCase() == 'male'
                ?<Text style={{ color: '#FFFFFF', fontSize: 12, borderRadius: 2, paddingStart: 4, paddingEnd: 4, backgroundColor: '#FF3B30' }}>Male</Text>
              :<Text style={{ color: '#FFFFFF', fontSize: 12, borderRadius: 2, paddingStart: 4, paddingEnd: 4, backgroundColor: '#8CC63F', marginStart: 4 }}>Female</Text>}
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
                source={profile.image?{uri:profile.image}:
                  require('../../assets/13.1-4-6-More/vendor_logo.png')}
              />
              <View style={{ width: '90%', marginStart: 10 }}>
                <Text style={{ fontSize: 18 }}>{profile.name}</Text>
                <View style={{ width: '90%', flexDirection: 'row' }}>
                  <Text style={{ width: '88%', fontSize: 16, color: '#999999' }}>{profile.city}- {profile.country}</Text>
                  <Image
                    style={{
                      width: 18,
                      height: 18,
                      marginEnd: 4
                    }}
                    resizeMode={'cover'}
                    source={require('../../assets/13.2-3-5-Car-Service-Profile/star_sky.png')}
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

          <View style={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 4,
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')}>
              <Text style={{
                padding: 12,
                fontSize: 16,
                textAlign: 'center',
                fontWeight: '500',
                color: '#00C8E4',
                fontWeight: 'bold'
              }}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </NavigationContainer>

    );
  }
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
