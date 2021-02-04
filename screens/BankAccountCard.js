import { StatusBar } from 'expo-status-bar';

import * as React from 'react';

import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, SafeAreaView, FlatList, Image, Rating, AirbnbRating } from 'react-native';
///import { SafeAreaView, FlatList, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text
          style={{
            width: '94%',
            fontSize: 18,
            marginBottom: 8,
            marginTop: 16,
            fontWeight: 'bold'
          }}>Bank Account</Text>

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
          backgroundColor:'#FFFFFF',
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
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 100
              }}
              resizeMode={'cover'}
              source={require('./assets/customer_pic_2.png')}
            />

            <View style={{ width: '84%', marginStart: 10 }}>
              <Text style={{ width: "50%", fontWeight: 'bold', color: '#FFFFFF' }}> Asix Bank </Text>
              <Text style={{ width: "50%", color: '#FFFFFF' }}>789769458974385</Text>
            </View>
          </View>

          <View style={{ width: '100%', flexDirection: 'row', paddingStart: 10, paddingEnd: 10, paddingTop: 10 }}>
            <Text style={{ width: "50%", color: '#999999' }}> Branch Code </Text>
            <Text style={{ width: "50%", color: '#999999' }}> IBAN Number </Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'row', paddingStart: 10, paddingEnd: 10 }}>
            <Text style={{ width: "50%", color: '#333333' }}> DF34DF </Text>
            <Text style={{ width: "50%", color: '#333333' }}> IBAN34342 </Text>
          </View>
          <Text style={{ width: "50%", color: '#999999', paddingStart: 10, paddingEnd: 10, paddingTop: 10 }}> Accoount Name </Text>
          <Text style={{ width: "50%", color: '#333333', paddingStart: 10, paddingEnd: 10 }}> Abhay Name </Text>
          
          <View style={{ width: '100%', flexDirection: 'row', padding: 10 }}>
            <Text style={{ width: "50%", color: '#00C8E4' }}> Edit </Text>
            <Text style={{ width: "50%", color: '#00C8E4', textAlign:'right' }}> Delete   </Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>

    </ScrollView>

  );
}

export default App;


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
