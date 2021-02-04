
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
  ScrollView, ImageBackground,
  Button,
  StyleSheet,
  Text,
  CheckBox,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import { StackNavigator } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//const [isSelected, setSelection] = useState(false);

const MyApp = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{
          width: '100%',
          //flexDirection: 'row',
          justifyContent: 'center',
          //alignItems: 'center'
          }}>
          <Image style={{
            width: '100%',
            height: 120,
            //marginStart: 50,
            //borderRadius: 5,
          }} resizeMode={'cover'} source={require('./assets/13.2-3-5-Car-Service-Profile/cover_photo.png')} />
          <View style={{
            width: '98%',
            flexDirection: 'row',
            marginTop:-20
            }}>
            <Image
              style={{
                textAlign:'left',
                marginStart:10,
                width: 12,
                height: 12,
              }}
              resizeMode={'cover'}
              source={require('./assets/13.2-3-5-Car-Service-Profile/clock_white.png')}
              />
              <Text style={{
                color:'#fff',
                marginStart:5,
                marginTop:-2,
                fontSize:12
                }}>
              10:00 am - 06:00 pm </Text>
            </View>
        </View>

        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:15,
          marginStart:80
          }}>
          <Image style={{
            width: 45,
            height: 45,
            borderWidth: 2,
            borderRadius: 5,
          }} resizeMode={'contain'} source={require('./assets/13.1-4-6-More/vendor_logo.png')} />
          
          <View style={{ width: '98%', marginTop: -30, marginStart: 10, marginEnd: 10 }}>
            <View style={{
              width: '98%',
              flexDirection: 'row',
              marginTop:30
              }}>
              <Text style={{
                //marginTop: 8,
                //marginStart: 10,
                fontSize: 15
              }}> Car Wash Center </Text>
            </View>
            <View style={{
              width: '98%',
              flexDirection: 'row',
              marginTop:4,
              marginBottom:4
              }}>
              <Text style={{
                width:'42%',
                color: '#B3B3B3',
                fontSize: 15
              }}> Dubai-UAE </Text>
              <Image
                style={{
                  width: 12,
                  height: 12,
                  marginStart:100,
                  marginTop:5
                }}
                resizeMode={'cover'}
                source={require('./assets/13.2-3-5-Car-Service-Profile/star_sky.png')}
              />
              <Text style={{
                //marginTop: 8,
                //marginStart: 40,
                fontSize: 15,
                color:'#00C8E4'
              }}> 4.5 </Text>
            </View>
          </View>

        </View>

        <View style={{
          marginTop:10,
          marginStart: 20,
          marginEnd: 20,
          width: '96%',
          borderWidth: 1,
          borderColor: '#F2F2F2'
        }} />

        <View style={styles.buttonContainer}>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            resizeMode={'cover'}
            source={require('./assets/7.1-8.8-my_bookings/service_pic_1.png')}
          />

          <View style={{ width: '76%', marginTop: -30, marginStart: 10, marginEnd: 10 }}>

            <View style={{
              width: '98%',
              flexDirection: 'row',
              marginTop:4
              }}>
              <Text style={{ width: "58%", textAlign: 'left' }}>
                Dental Implantology </Text>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginStart:45
                }}
                resizeMode={'cover'}
                source={require('./assets/13.7-Add-Emp-Availity/box_check.png')}
              />
            </View>

            <View style={{
              width: '98%',
              flexDirection: 'row',
              marginTop:4,
              marginBottom:4
              }}>
              <Image
                style={{
                  width: 10,
                  height: 10,
                }}
                resizeMode={'cover'}
                source={require('./assets/7.1-8.8-my_bookings/star_fill.png')}
              />
              <Image
                style={{
                  width: 10,
                  height: 10,
                  marginStart:5
                }}
                resizeMode={'cover'}
                source={require('./assets/7.1-8.8-my_bookings/star_unfill.png')}
              />
            </View>
            
            <Text style={{ width: "98%", color: '#B3B3B3',marginBottom:4 }}>
              Service explain some text here  </Text>
            <View style={{
              width:'98%',
              flexDirection: 'row',
              justifyContent:'flex-start',
              alignItems:'center',
              marginTop:4
              }}>
              <Text style={{ 
                fontWeight: 'bold',
                color:'#808080',
                fontSize:12
              }}>
                300 AED </Text>
              <Image
                style={{
                
                  width: 10,
                  height: 10,
                  marginStart:10
                }}
                resizeMode={'cover'}
                source={require('./assets/7.1-8.8-my_bookings/time.png')}
              /> 
              <Text style={{ 
                fontWeight: 'bold',
                color:'#999999',
                marginStart:4,
                fontSize:10 }}>
                2 Hrs 30 Min </Text>
            </View>

          </View>
        </View>

        <View style={{
          marginStart: 20,
          marginEnd: 20,
          marginTop:10,
          width: '96%',
          borderWidth: 1,
          borderColor: '#F2F2F2'
        }} />

        <View style={styles.buttonContainer}>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            resizeMode={'cover'}
            source={require('./assets/7.1-8.8-my_bookings/service_pic_2.png')}
          />
          <ImageBackground
            style={{
              marginTop:-60,
              marginStart:-35,
              width: 32,
              height: 32,
            }}
            resizeMode={'cover'}
            source={require('./assets/9.1-Service-List-Dental/discount.png')}
          >
          <Text style={{
            width:35,
            color:'#fff',
            fontSize:10,
            textAlign:'center'
          }} >15 % OFF</Text>
          </ImageBackground>
          <View style={{ width: '76%', marginTop: -30, marginStart: 10, marginEnd: 10 }}>
            <View style={{
              width: '98%',
              flexDirection: 'row',
              marginTop:4
              }}>
              <Text style={{ width: "58%", textAlign: 'left' }}>
                Mini Dental Implants... </Text>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginStart:45
                }}
                resizeMode={'cover'}
                source={require('./assets/13.7-Add-Emp-Availity/box_uncheck_1.png')}
              />
            </View>

            <View style={{
              width: '98%',
              flexDirection: 'row',
              marginTop:4,
              marginBottom:4
              }}>
              <Image
                style={{
                  width: 10,
                  height: 10,
                }}
                resizeMode={'cover'}
                source={require('./assets/7.1-8.8-my_bookings/star_fill.png')}
              />
              <Image
                style={{
                  width: 10,
                  height: 10,
                  marginStart:5
                }}
                resizeMode={'cover'}
                source={require('./assets/7.1-8.8-my_bookings/star_fill.png')}
              />
              <Image
                style={{
                  width: 10,
                  height: 10,
                  marginStart:5
                }}
                resizeMode={'cover'}
                source={require('./assets/7.1-8.8-my_bookings/star_fill.png')}
              />
              <Image
                style={{
                  width: 10,
                  height: 10,
                  marginStart:5
                }}
                resizeMode={'cover'}
                source={require('./assets/7.1-8.8-my_bookings/star_fill.png')}
              />
              <Image
                style={{
                  width: 10,
                  height: 10,
                  marginStart:5
                }}
                resizeMode={'cover'}
                source={require('./assets/7.1-8.8-my_bookings/star_unfill.png')}
              />
            </View>
            
            <Text style={{ width: "98%", color: '#B3B3B3',marginBottom:4 }}>
              Service explain some text here  </Text>
            <View style={{
              width:'98%',
              flexDirection: 'row',
              justifyContent:'flex-start',
              alignItems:'center',
              marginTop:4
              }}>
              <Text style={{ 
                fontWeight: 'bold',
                color:'#808080',
                fontSize:12
              }}>
                300 AED </Text>
              <Image
                style={{
                
                  width: 10,
                  height: 10,
                  marginStart:10
                }}
                resizeMode={'cover'}
                source={require('./assets/7.1-8.8-my_bookings/time.png')}
              /> 
              <Text style={{ 
                fontWeight: 'bold',
                color:'#999999',
                marginStart:4,
                fontSize:10 }}>
                2 1 30 Min </Text>
            </View>

          </View>
        </View>





        <View style={{
          marginBottom: 100
        }}></View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>

  );

}

export default MyApp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 10,
    marginStart: 60,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  textHeading: {
    fontSize: 18,
    marginBottom: 16,
    marginTop: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    width: "94%",
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
  },
  textArea: {
    width: "94%",
    padding: 10,
    borderRadius: 4,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    height: 150,
    justifyContent: "flex-start"
  }
});
