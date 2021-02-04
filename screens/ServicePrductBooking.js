import { StatusBar } from 'expo-status-bar';

import * as React from 'react';

import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, SafeAreaView, FlatList, Image, Rating, AirbnbRating } from 'react-native';
///import { SafeAreaView, FlatList, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={{ width: '98%', color: '#999999', fontSize: 12 }}> Booking ID - 45763 </Text>
        <Text style={{ width: '98%', color: '#999999', fontSize: 12, marginTop: 4 }}> 15 August 2020, 05:30 PM </Text>
        <View style={styles.buttonContainer}>
        </View>


        <View style={{ flexDirection: 'row', width: '98%', marginTop: 8 }}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 100
            }}
            resizeMode={'cover'}
            source={require('./assets/customer_pic_2.png')}
          />

          <View style={{
            marginStart: 10,
            marginTop: 4
          }}>

            <Text style={{ fontWeight: 'bold' }}> Alex Jenus </Text>
            <Text style={{ color: '#999999', fontSize: 12 }}>+91  9458974385</Text>
          </View>
        </View>


        <View
          style={{
            borderBottomColor: '#E6E6E6',
            marginBottom: 16,
            marginTop: 16,
            width: "100%",
            borderBottomWidth: 1,
          }}
        />

        <View style={{ width: '98%', flexDirection: 'row' }}>
          <View style={{
            width: '50%',
            flexDirection: 'row',
          }}>
            <Text style={{
              fontSize: 11,
              color: '#999999',
              paddingStart: 16,
              paddingEnd: 16,
              backgroundColor: '#E6E6E6',
              borderRadius: 12
            }}> Gender </Text>
            <Text style={{ fontSize: 11, color: '#999999' }}> Male </Text>
          </View>

          <View style={{
            width: '50%',
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}>
            <Text style={{
              fontSize: 11,
              color: '#999999',
              paddingStart: 16,
              paddingEnd: 16,
              backgroundColor: '#E6E6E6',
              borderRadius: 12
            }}> Status </Text>
            <Text style={{ fontSize: 11, color: '#999999' }}> Requested </Text>
          </View>

        </View>


        <View
          style={{
            borderBottomColor: '#E6E6E6',
            marginBottom: 16,
            marginTop: 16,
            width: "100%",
            borderBottomWidth: 1,
          }}
        />


        <View style={{ flexDirection: 'row', width: '98%' }}>
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            resizeMode={'cover'}
            source={require('./assets/app-icon.jpg')}
          />

          <View style={{
            marginStart: 10,
            marginTop: 4
          }}>

            <Text style={{ fontWeight: 'bold' }}> Dental </Text>
            <Text style={{
              color: '#FFFFFF',
              fontSize: 10,
              backgroundColor: '#FF3B30',
              textAlign: 'center',
              borderRadius: 50,
              paddingStart: 8,
              paddingEnd: 8
            }}>40 % OFF</Text>

            <View style={{
              marginTop: 4,
              flexDirection: 'row',
              flex: 1
            }}>

              <Text style={{ color: '#00C8E4' }}> 300 AED </Text>
              <Text style={{
              }}>1 Hrs 30 Min</Text>

            </View>
          </View>
        </View>

        <Text style={{
          width: '98%',
          color: '#999999',
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: 16,
          marginBottom: 16
        }}> DATE & TIME APPPOINTMENT </Text>

        <View style={{
          width: '98%',
          borderWidth: 1,
          padding: 8,
          borderColor: '#00C8E4',
        }}>
          <View style={styles.buttonContainer}>
            <Text style={{ width: '98%', color: '#00C8E4', fontWeight: 'bold' }}> 15 OCT 2020 </Text>
            <Text style={{ width: '98%', color: '#00C8E4', fontWeight: 'bold', textAlign: 'right' }}> Thursday </Text>
          </View>

          <View
            style={{
              borderBottomColor: '#00C8E4',
              marginTop: 16,
              marginBottom: 6,
              width: "100%",
              borderBottomWidth: 1,
            }}
          />

          <View style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 8,
            justifyContent: 'center',
          }}>
            <Text style={{
              width: '100%',
              color: '#FFFFFF',
              textAlign: 'center',
              padding: 4,
              marginEnd: 4,
              borderRadius: 4,
              backgroundColor: '#00C8E4'
            }}> 11:00 PM-12:00 PM </Text>
            <Text style={{
              width: '100%',
              color: '#FFFFFF',
              textAlign: 'center',
              padding: 4,
              marginStart: 4,
              borderRadius: 4,
              marginEnd: 4,
              backgroundColor: '#00C8E4'
            }}> 11:00 PM-12:00 PM </Text>
          </View>
        </View>

        <Text style={{
          width: '98%',
          color: '#999999',
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: 24
        }}> SELECTED FOR JOB </Text>

        <View style={{ flexDirection: 'row', width: '98%', marginTop: 8 }}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 100
            }}
            resizeMode={'cover'}
            source={require('./assets/customer_pic_2.png')}
          />

          <View style={{
            marginStart: 10,
            marginTop: 4
          }}>

            <Text style={{ fontWeight: 'bold' }}> Dr. Arman Ali </Text>
            <Text style={{ color: '#999999', fontSize: 12 }}>+91  9458974385</Text>
          </View>
        </View>

        <Text style={{
          fontWeight: 'bold',
          width: '100%',
          color: '#999999',
          marginStart: 8,
          marginTop: 8
        }}> SERVICE ADDRESS </Text>


        <Text style={{
          fontWeight: 'bold',
          width: '100%',
          color: '#4D4D4D',
          marginStart: 8,
        }}> B-109, External Information Department , PO Box 17, Sharjah, UAE </Text>



        <Text style={{
          fontWeight: 'bold',
          width: '100%',
          color: '#00C8E4',
          marginStart: 8,
          marginTop: 32
        }}> PRODUCT DETAILS </Text>

        <View style={{
          width: '98%',
          borderRadius: 6,
          borderColor: '#808080',
          borderWidth: 1,
          padding: 10,
          margin: 10
        }}>
          <View style={{ width: '98%', flexDirection: 'row' }}>
            <View style={{
              width: '50%',
              flexDirection: 'row',
            }}>
              <Text style={{
                fontSize: 11,
                color: '#999999',
                paddingStart: 16,
                paddingEnd: 16,
                backgroundColor: '#E6E6E6',
                borderRadius: 12
              }}> Item </Text>
              <Text style={{ fontSize: 11, color: '#999999' }}> 2 Item </Text>
            </View>

            <View style={{
              width: '50%',
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}>
              <Text style={{
                fontSize: 11,
                color: '#999999',
                paddingStart: 16,
                paddingEnd: 16,
                backgroundColor: '#E6E6E6',
                borderRadius: 12
              }}> Status </Text>
              <Text style={{ fontSize: 11, color: '#999999' }}> Accepted </Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: '#B3B3B3',
              marginTop: 16,
              marginBottom: 6,
              width: "100%",
              borderBottomWidth: 1,
            }}
          />


          <View style={{ flexDirection: 'row', width: '98%', marginTop: 8 }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 100
              }}
              resizeMode={'cover'}
              source={require('./assets/customer_pic_2.png')}
            />

            <View style={{
              marginStart: 10,
              marginTop: 4
            }}>

              <Text style={{ fontWeight: 'bold' }}> SONAX XTRAM POLICE </Text>
              <Text style={{ color: '#999999', fontSize: 12 }}>Weight - 1 Liter </Text>

              <View style={{ width: '100%', flexDirection: 'row', marginTop: 8 }}>
                <Text style={{ width: '50%', color: '#333333', fontSize: 12, fontWeight: 'bold' }}> 500 AED </Text>
                <Text style={{ width: '50%', color: '#999999', fontSize: 12, textAlign: 'right' }}> Quantity: 2 </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: '#B3B3B3',
              marginTop: 16,
              marginBottom: 6,
              width: "100%",
              borderBottomWidth: 1,
            }}
          />

          <View style={{ flexDirection: 'row', width: '98%', marginTop: 8 }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 100
              }}
              resizeMode={'cover'}
              source={require('./assets/customer_pic_2.png')}
            />

            <View style={{
              marginStart: 10,
              marginTop: 4
            }}>

              <Text style={{ fontWeight: 'bold' }}> SONAX XTRAM POLICE </Text>
              <Text style={{ color: '#999999', fontSize: 12 }}>Weight - 1 Liter </Text>

              <View style={{ width: '100%', flexDirection: 'row', marginTop: 8 }}>
                <Text style={{ width: '50%', color: '#333333', fontSize: 12, fontWeight: 'bold' }}> 500 AED </Text>
                <Text style={{ width: '50%', color: '#999999', fontSize: 12, textAlign: 'right' }}> Quantity: 2 </Text>
              </View>
            </View>
          </View>

          <View style={{ width: '100%', flexDirection: 'row', marginTop: 8 }}>
            <Text style={{ width: '50%', color: '#00C8E4', fontSize: 12, fontWeight: 'bold' }}> TOTAL </Text>
            <Text style={{ width: '50%', color: '#00C8E4', fontSize: 12, textAlign: 'right' }}> 800.00 AED </Text>
          </View>

          <View
            style={{
              borderBottomColor: '#B3B3B3',
              marginTop: 16,
              marginBottom: 6,
              width: "100%",
              borderBottomWidth: 1,
            }}
          />

          <Text style={{
            fontWeight: 'bold',
            width: '100%',
            color: '#999999',
            marginStart: 8,
            marginTop: 8
          }}> SHIPPING ADDRESS </Text>


          <Text style={{
            fontWeight: 'bold',
            width: '100%',
            color: '#4D4D4D',
            marginStart: 8,
          }}> B-109, External Information Department , PO Box 17, Sharjah, UAE </Text>


          <View style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 24,
            marginStart: 24
          }}>
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 100
              }}
              resizeMode={'cover'}
              source={require('./assets/order_placed_active.png')}
            />

            <View style={{
              marginStart: 10,
            }}>

              <Text style={{ color: '#333333', }}> Order Placed </Text>
              <Text style={{ color: '#999999' }}> 15 Oct 2020, 10:30 AM </Text>
            </View>
          </View>

          <View style={{
            height: 60,
            width: 1,
            marginTop:-8,
            marginStart:38,
            backgroundColor: '#999999',
          }}></View>

          <View style={{ 
            flexDirection: 'row',
            width: '90%',
            marginStart: 24
          }}>
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 100
              }}
              resizeMode={'cover'}
              source={require('./assets/order_placed_inactive.png')}
            />

            <View style={{
              marginStart: 10,
            }}>

              <Text style={{ color: '#333333', }}> On the Way </Text>
              <Text style={{ color: '#999999' }}> 15 Oct 2020, 10:30 AM </Text>
            </View>
          </View>


          <View style={{
            height: 60,
            width: 1,
            marginTop:-8,
            marginStart:38,
            backgroundColor: '#999999',
          }}></View>

          <View style={{
            flexDirection: 'row',
            width: '90%',
            marginStart: 24,
            marginBottom: 24
          }}>
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 100
              }}
              resizeMode={'cover'}
              source={require('./assets/order_placed_inactive.png')}
            />

            <View style={{
              marginStart: 10,
            }}>

              <Text style={{ color: '#333333', }}> Delivered </Text>
              <Text style={{ color: '#999999' }}> 15 Oct 2020, 10:30 AM </Text>
            </View>
          </View>


          <View style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 12,
            justifyContent: 'center',
          }}>
            <Text style={{
              width: '100%',
              color: '#FFFFFF',
              textAlign: 'center',
              padding: 4,
              marginEnd: 4,
              borderRadius: 4,
              backgroundColor: '#FF3B30'
            }}> Decline </Text>
            <Text style={{
              width: '100%',
              color: '#FFFFFF',
              textAlign: 'center',
              padding: 4,
              marginStart: 4,
              borderRadius: 4,
              marginEnd: 4,
              backgroundColor: '#00A99D'
            }}> Accept </Text>
          </View>

        </View>

        <View style={{
          width: '98%',
          padding: 8,
          marginTop: 24,
          marginBottom: 16,
          borderRadius: 4,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowRadius: 5,
          shadowOpacity: 1.0,
          backgroundColor: '#FFFFFF'
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 8,
            width: '100%',
            justifyContent: 'center',
          }}>
            <Text style={{ width: '100%', textAlign: 'left' }}> Subtotal </Text>
            <Text style={{ width: '100%', textAlign: 'right' }}> 300.00 </Text>
            <Text style={{ width: '100%', textAlign: 'right' }}> AED </Text>
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 8,
            width: '100%',
            justifyContent: 'center',
          }}>
            <Text style={{ width: '100%', textAlign: 'left' }}> Subtotal </Text>
            <Text style={{ width: '100%', textAlign: 'right' }}> 300.00 </Text>
            <Text style={{ width: '100%', textAlign: 'right' }}> AED </Text>
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 8,
            width: '100%',
            justifyContent: 'center',
          }}>
            <Text style={{ width: '100%', color: '#00C8E4', textAlign: 'left' }}> Subtotal </Text>
            <Text style={{ width: '100%', color: '#00C8E4', textAlign: 'right' }}> 300.00 </Text>
            <Text style={{ width: '100%', color: '#00C8E4', textAlign: 'right' }}> AED </Text>
          </View>

        </View>


        <Text style={{
          width: '98%',
          color: '#999999',
          fontWeight: 'bold',
          marginTop: 24
        }}> PAYMENT </Text>

        <Text style={{
          width: '98%',
          color: '#333333',
          marginTop: 4
        }}> Payment by Wallet </Text>


        <View style={styles.buttonContainer}>
          <Text style={{
            width: "50%",
            fontSize: 12,
            color: '#FF3B30',
            margin: 6,
            fontWeight: 'bold',
            padding: 7,
            textAlign: 'center'
          }}> DECLINE </Text>
          <Text style={{
            width: "50%",
            fontSize: 12,
            color: '#8CC63F',
            margin: 6,
            fontWeight: 'bold',
            padding: 7,
            textAlign: 'center'
          }}> ACCEPT </Text>
        </View>

        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </ScrollView>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 66,
    height: 58,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  textHeading: {
    width: '47%',
    fontSize: 18,
    marginStart: 16,
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
  },

  buttonStyle: {
    width: "46%",
    marginEnd: 8,
    backgroundColor: "#00C8E4",
    borderRadius: 40,
  },
  buttonStyleWhite: {
    width: "46%",
    marginEnd: 8,
    backgroundColor: "#E6E6E6",
    borderRadius: 40,
  },
  containerList: {
    width: "100%",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    width: "92%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  textBorder: {
    width: "50%",
    fontSize: 11,
    color: '#333333',
    fontWeight: 'bold',
    marginTop: 4,
    marginEnd: 4,
    marginStart: 4,
    borderRadius: 4,
    borderColor: '#E6E6E6',
    borderWidth: 1, padding: 4
  },
  verticleLine: {
    height: 40,
    width: 1,
    backgroundColor: '#909090',
  },
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
