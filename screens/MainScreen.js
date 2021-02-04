import { StatusBar } from 'expo-status-bar';

import * as React from 'react';

import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
///import { SafeAreaView, FlatList, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


const SERVICE_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const REVANUE_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


const Item = ({ title }) => (
  <View style={styles.item}>

    <View style={styles.buttonContainer}>
      <Text style={{ width: "50%", color: '#999999', fontSize: 12 }}> Booking ID - 45763 </Text>
      <Text style={{ width: "50%", color: '#999999', fontSize: 12, textAlign: 'right' }}> 15 August 2020, 05:30 PM </Text>
    </View>

    <View
      style={{
        borderBottomColor: '#E6E6E6',
        marginTop: 8,
        marginBottom: 4,
        width: "100%",
        borderBottomWidth: 1,
      }}
    />

    <View style={styles.buttonContainer}>
      <Image
        style={{
          width: 40,
          height: 40,
          borderRadius: 100
        }}
        resizeMode={'cover'}
        source={require('../assets/customer_pic_2.png')}
      />

      <View style={{ width: '84%', marginStart: 10 }}>

        <View style={styles.buttonContainer}>
          <Text style={{ width: "50%", fontWeight: 'bold' }}> Alex Jenus </Text>
          <Text style={{ width: "50%", textAlign: 'right', color: '#999999' }}> STATUS </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={{ width: "50%", color: '#999999' }}>+91  9458974385</Text>
          <View style={{
            width: "56%",
            marginTop: 4,
            alignItems: 'flex-end'
          }}>
            <TouchableOpacity style={{
              width: "60%",
              backgroundColor: "#FFB74D",
              borderRadius: 4,
            }}>
              <Text style={{
                textAlign: 'center',
                padding: 6,
                color: '#FFFFFF'
              }}> Requested </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>

    <View style={styles.buttonContainer}>
      <Text style={{ width: "50%", fontSize: 11, color: '#999999', marginTop: 10, marginStart: 4 }}> No. Of Service </Text>
      <Text style={{ width: "50%", fontSize: 11, color: '#999999', marginTop: 10, marginStart: 4 }}> Total Amount </Text>
    </View>

    <View style={styles.buttonContainer}>
      <Text style={styles.textBorder}> No. Of Service </Text>
      <Text style={styles.textBorder}> 600.00 AED </Text>
    </View>


    <View style={styles.buttonContainer}>
      <Text style={{
        width: "50%",
        fontSize: 11,
        color: '#FF3B30',
        margin: 6,
        borderRadius: 4,
        borderColor: '#FF3B30',
        borderWidth: 1,
        padding: 7,
        textAlign: 'center'
      }}> Decline </Text>
      <Text style={{
        width: "50%",
        fontSize: 11,
        color: '#8CC63F',
        margin: 6,
        borderRadius: 4,
        borderColor: '#8CC63F',
        borderWidth: 1,
        padding: 7,
        textAlign: 'center'
      }}> Accept </Text>
    </View>


    <View style={styles.buttonContainer}>
      <Text style={{
        width: "50%",
        fontSize: 11,
        color: '#7A8DF9',
        margin: 6,
        borderRadius: 4,
        borderColor: '#7A8DF9',
        borderWidth: 1,
        padding: 7,
        textAlign: 'center'
      }}> Complete </Text>
      <Text style={{
        width: "50%",
        fontSize: 11,
        color: '#00C8E4',
        margin: 6,
        borderRadius: 4,
        borderColor: '#00C8E4',
        borderWidth: 1,
        padding: 7,
        textAlign: 'center'
      }}> View Details </Text>
    </View>



  </View >
);


const ItemService = ({ title }) => (
  <View style={styles.item}>

    <View style={styles.buttonContainer}>
      <Image
        style={{
          width: 108,
          height: 108,
        }}
        resizeMode={'cover'}
        source={require('../assets/self_service_pic_2.png')}
      />

      <View style={{ width: '76%', marginStart: 10, marginEnd: 10 }}>

        <View style={styles.buttonContainer}>
          <Text style={{ width: "80%", textAlign: 'left' }}>Implant Bridges </Text>
          <TouchableOpacity style={{
            borderRadius: 4,
          }}>
            <Image
              style={{
                width: 26,
                height: 26,
                marginEnd: 2
              }}
              resizeMode={'cover'}
              source={require('../assets/edit.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{
            borderRadius: 4,
          }}>
            <Image
              style={{
                width: 26,
                height: 26,
                marginEnd: 2
              }}
              resizeMode={'cover'}
              source={require('../assets/delete.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ width: "50%", fontWeight: 'bold' }}>25.00 AED </Text>
        <Text style={{ width: "98%", color: '#B3B3B3' }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,  </Text>
        <Text style={{ width: "98%", color: '#808080' }}>2 Hrs 30 Min </Text>

      </View>
    </View>

  </View >
);

const ItemRevenue = ({ title }) => (
  <View style={styles.item}>

    <View style={styles.buttonContainer}>
      <Text style={{ width: "50%", fontWeight: 'bold', color: '#666666' }}>Order ID: 34342 </Text>
      <Text style={{ width: "50%", fontWeight: 'bold', color: '#666666', textAlign: 'right' }}>25.00 AED </Text>
    </View>
    <Text style={{ width: "98%", color: '#666666', marginTop: 4, fontSize: 12 }}>5 Oct 2020, 05:30 PM </Text>


    <View style={{
      width: "98%",
      marginTop: 16,
      borderBottomColor: '#E6E6E6',
      borderBottomWidth: 1,
    }} />

  </View >
);


function HomeScreen() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <Text style={styles.textHeading}> My Booking </Text>
          <Text style={{
            width: '47%',
            fontSize: 18,
            textAlign: 'right',
            marginStart: 16,
            marginBottom: 16,
            marginEnd: 16,
            marginTop: 32,
            fontWeight: 'bold'
          }}> 30 </Text>
        </View>

        <View
          style={{
            borderBottomColor: '#E6E6E6',
            marginBottom: 16,
            width: "100%",
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={{
            width: "46%",
            marginEnd: 8,
            backgroundColor: "#00C8E4",
            borderRadius: 40,
          }}>
            <Text style={{
              textAlign: 'center',
              fontWeight: 'bold',
              padding: 10,
              color: '#FFFFFF'
            }}> Current </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyleWhite}>
            <Text style={{
              textAlign: 'center',
              fontWeight: 'bold',
              padding: 10,
              color: '#444444'
            }}> History </Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.containerList}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

function ServicesTabScreen() {
  const renderItem = ({ item }) => (
    <ItemService title={item.title} />
  );

  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <Text style={{
            width: '88%',
            fontSize: 18,
            marginStart: 16,
            marginBottom: 16,
            marginTop: 32,
            alignSelf: 'flex-start',
            fontWeight: 'bold'
          }}> Services </Text>
          <TouchableOpacity style={{
            borderRadius: 4,
          }}>
            <Image
              style={{
                width: 26,
                height: 26,
                marginEnd: 32
              }}
              resizeMode={'cover'}
              source={require('../assets/add_service_Product.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderBottomColor: '#E6E6E6',
            marginBottom: 16,
            width: "100%",
            borderBottomWidth: 1,
          }}
        />
        <SafeAreaView style={styles.containerList}>
          <FlatList
            data={SERVICE_DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

function MoreTabScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{
          width: '100%',
          height: 120,
          backgroundColor: '#00C8E4'
        }} />
        <Image style={{
          width: 140,
          height: 140,
          marginTop: -90,
          borderWidth: 4,
          marginBottom: 16,
          backgroundColor: '#000000',
          borderRadius: 100,
          borderColor: '#FFFFFF'
        }} resizeMode={'contain'} source={require('../assets/13.1-4-6-More/vendor_logo.png')} />


        <View style={styles.rawContainer}>
          <Text style={{
            width: "50%",
            fontSize: 18,
            fontWeight: 'bold',
            color: '#1A1A1A',
            justifyContent: 'center'
          }}>Car Wash</Text>

          <Text style={{
            width: "50%",
            textAlign: 'right',
            color: '#FF3B30',
            icon: 'more',
            justifyContent: 'center'
          }}>Unverified Account</Text>

        </View>
        <Text style={{
          width: "90%",
          fontSize: 18,
          color: '#B3B3B3',
          justifyContent: 'center'
        }}>Dubai - UAE</Text>
        <View style={styles.rawContainer}>
          <Text style={{
            width: "50%",
            fontSize: 18,
            fontWeight: 'bold',
            color: '#1A1A1A',
            justifyContent: 'center'
          }}>carwash@gmail.com</Text>

          <Text style={{
            width: "50%",
            textAlign: 'right',
            color: '#00C8E4',
            icon: 'more',
            fontSize: 12,
            justifyContent: 'center'
          }}>Verify</Text>
        </View>

        <View style={{ width: '100%', flexDirection: 'row', padding: 10 }}>
          <Text style={styles.button}> View Profile </Text>
          <Text style={styles.button}> Edit Profile   </Text>
        </View>

        {/* navigation menu */}
        <View style={styles.view} />

        <View style={styles.rawContainer}>
          <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/13.1-4-6-More/add_emp_availability.png')} />
          <Text style={styles.label}>Add Employee & Avialability</Text>
        </View>

        <View style={styles.view} />

        <View style={styles.rawContainer}>
          <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/13.1-4-6-More/bank_account.png')} />
          <Text style={styles.label}>Bank Account</Text>
        </View>

        <View style={styles.view} />

        <View style={styles.rawContainer}>
          <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/13.1-4-6-More/payment_history.png')} />
          <Text style={styles.label}>Payment Activity</Text>
        </View>

        <View style={styles.view} />

        <View style={styles.rawContainer}>
          <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/13.1-4-6-More/notifications.png')} />
          <Text style={styles.label}>Notificatios</Text>
        </View>

        <View style={styles.view} />

        <View style={styles.rawContainer}>
          <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/13.1-4-6-More/settings.png')} />
          <Text style={styles.label}>Settings</Text>
        </View>

        <View style={styles.view} />

        <View style={styles.rawContainer}>
          <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/13.1-4-6-More/terms_services.png')} />
          <Text style={styles.label}>Terms of Services</Text>
        </View>

        <View style={styles.view} />

        <View style={styles.rawContainer}>
          <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/13.1-4-6-More/rate_us.png')} />
          <Text style={styles.label}>Rate Us</Text>
        </View>

        <View style={styles.view} />

        <View style={styles.rawContainer}>
          <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/13.1-4-6-More/help_feedback.png')} />
          <Text style={styles.label}>Help & Feedback</Text>
        </View>

        <View style={styles.view} />

        <View style={styles.rawContainer}>
          <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/13.1-4-6-More/signout.png')} />
          <Text style={styles.label}>Sign Out</Text>
        </View>

        <View style={styles.view} />


      </View>
    </ScrollView>
  );
}

function ManageOffersTabScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.textHeading}>Manage Offer </Text>
        <View style={{
          width: "94%",
          marginStart: 10,
          marginEnd: 10,
          marginBottom: 16,
          backgroundColor: "#FFFFFF",
          borderRadius: 4,
        }}>
          <TouchableOpacity>
            <Text style={{
              textAlign: 'center',
              padding: 10,
              color: '#00C8E4'
            }}> Generate Offer Code </Text>
          </TouchableOpacity>
        </View>

        <View style={{
          width: '94%',
          borderRadius: 4,
          shadowColor: "#CCCCCC",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 1
          },
          backgroundColor: '#FFFFFF',
          margin: 10
        }}>
          <View style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            borderTopEndRadius: 4,
            borderTopStartRadius: 4,
            padding: 12,
            backgroundColor: '#00C8E4',
            justifyContent: 'center',
          }}>
            <View style={{ width: '50%', marginStart: 10 }}>
              <Text style={{ width: "50%", color: '#FFFFFF' }}>OFFER CODE </Text>
              <Text style={{ width: "50%", fontWeight: 'bold', color: '#FFFFFF' }}>DENTAL 151</Text>
            </View>
            <View style={{
              width: '40%',
              marginStart: 30,
              marginEnd: 30,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              borderRadius: 24
            }}>
              <Image
                style={{
                  width: 24,
                  height: 24,
                  marginEnd: 8
                }}
                resizeMode={'contain'}
                source={require('../assets/12.1-12.2-Offer/gift_icon.png')}
              />
              <Text style={{ fontSize: 34, fontWeight: 'bold', color: '#00C8E4' }}>50</Text>
              <Text style={{ width: '15%', fontSize: 11, fontWeight: 'bold', color: '#00C8E4', marginStart: 8 }}>% OFF</Text>
            </View>

          </View>

          <View style={{
            width: '100%',
            flexDirection: 'row',
            paddingStart: 10,
            paddingEnd: 10,
            paddingTop: 10
          }}>
            <Text style={{ width: "50%", color: '#999999' }}> NO. OF USER </Text>
            <Text style={{ width: "50%", color: '#999999' }}> VELIDITY </Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'row', paddingStart: 10, paddingEnd: 10 }}>
            <Text style={{ width: "50%", color: '#333333', fontWeight: 'bold' }}> 150 </Text>
            <Text style={{ width: "50%", color: '#333333', fontWeight: 'bold' }}> 15 Nov 2020 </Text>
          </View>

          <View style={{ width: '100%', flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.buttonStyle}>
              <Image
                style={styles.buttonIcon}
                resizeMode={'contain'}
                source={require('../assets/12.1-12.2-Offer/edit001.png')}
              />
              <Text style={{ color: '#00C8E4' }} > Edit </Text>
            </View>
            <View style={styles.buttonStyle}>
              <Image
                style={styles.buttonIcon}
                resizeMode={'contain'}
                source={require('../assets/12.1-12.2-Offer/delete001.png')}
              />
              <Text style={{ color: '#00C8E4' }} > Remove </Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

function RevanueTabScreen() {
  const renderItem = ({ item }) => (
    <ItemRevenue title={item.title} />
  );

  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>

        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 24,
          marginStart: 8,
          marginEnd: 8,
          textAlign: 'center'
        }}>
          <Text style={{
            width: '100%',
            margin: 8,
            padding: 4,
            borderRadius: 32,
            color: '#FFFFFF',
            backgroundColor: '#00C8E4'
          }}>Daily</Text>

          <Text style={{
            width: '100%',
            margin: 8,
            padding: 4,
            borderRadius: 32,
            color: '#808080',
            backgroundColor: '#E6E6E6'
          }}>Weekly</Text>

          <Text style={{
            width: '100%',
            margin: 8,
            padding: 4,
            borderRadius: 32,
            color: '#808080',
            backgroundColor: '#E6E6E6'
          }}>Monthly</Text>
        </View>

        <Image
          style={{
            width: '100%',
            height: 140,
            marginTop: 26
          }}
          source={require('../assets/11.1-Revenue-Daily/daily_report.png')}
        />

        <View style={{
          width: '96%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 24,
        }}>
          <Text style={{
            width: '86%',
            textAlign: 'left',
            fontWeight: 'bold',
            color: '#666666',
            fontSize: 18
          }}>PAYMENT HISTORY</Text>

          <Image
            style={{
              width: 30,
              height: 30,
            }}
            resizeMode={'cover'}
            source={require('../assets/11.1-Revenue-Daily/download_report.png')}
          />
        </View>

        <View style={styles.view} />

        <SafeAreaView style={styles.containerList}>
          <FlatList
            data={REVANUE_DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const Tab = createMaterialBottomTabNavigator();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="REVENUE"
        activeColor="#00C8E4"
        inactiveColor="#999999"
        barStyle={{ backgroundColor: '#ffff' }}
        style={{ backgroundColor: '#FFFFFF' }}>
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }} />
        <Tab.Screen name="Manage Offers" component={ManageOffersTabScreen}
          options={{
            tabBarLabel: 'MANAGE OFFER',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={24} />
            ),
          }} />
        <Tab.Screen name="ADD SERVICE" component={ServicesTabScreen}
          options={{
            tabBarLabel: 'ADD SERVICE',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={24} />
            ),
          }} />
        <Tab.Screen name="REVENUE" component={RevanueTabScreen}
          options={{
            tabBarLabel: 'REVENUE',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="revenue" color={color} size={24} />
            ),
          }} />
        <Tab.Screen name="MORE" component={MoreTabScreen}
          options={{
            tabBarLabel: 'MORE',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="more" color={color} size={24} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainScreen;


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#F2F2F2',
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
    alignSelf: 'flex-start',
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
  //more Tabs
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
    width: "90%",
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
  button: {
    width: "50%",
    color: '#00C8E4',
    textAlign: 'right',
    borderWidth: 1,
    textAlign: 'center',
    margin: 8,
    borderColor: '#00C8E4',
    padding: 4,
    borderRadius: 4
  },

  //Mange Users
  buttonStyle: {
    width: "40%",
    color: '#00C8E4',
    borderColor: '#00C8E4',
    borderWidth: 1,
    marginStart: 16,
    marginEnd: 16,
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    padding: 4,
    borderRadius: 100,
    textAlign: 'center'
  },
  buttonIcon: {
    width: 12,
    height: 12,
    marginEnd: 4
  }
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
