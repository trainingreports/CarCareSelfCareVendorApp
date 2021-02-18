
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
        <Text style={styles.textHeading}> Payment Activity </Text>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          //marginTop: 10,
          }}>
          <Image style={{
            width: 15,
            height: 15,
            marginStart: 20,
            marginBottom:40
            //borderRadius: 5,
          }} resizeMode={'contain'} source={require('../../assets/13.15-Payment-Activity/arrow_up.png')} />
          
          <View style={{
              width: '40%',  
              marginStart: 10, 
              //marginEnd: 10 ,
              textAlign: 'left'
            }}>
              <Text style={{  
                fontStyle:'normal',
                color:'#808080',
                fontSize:15 }}>
                Due Amount </Text>
              <Text style={{ 
                fontWeight: 'bold',
                color:'#4D4D4D',
                fontSize:18
                }}>
                50,000 </Text>
              <Text style={{ 
                 fontStyle:'normal',
                 color:'#B3B3B3',
                 fontSize:15
                 }}>
                AED </Text>
          </View>

          <Image style={{
            width: 10,
            height: 70,
            marginTop:10,
            //marginEnd: 10,
            //marginBottom:40,
          }} resizeMode={'contain'} source={require('../../assets/13.15-Payment-Activity/devider.png')} />
          
          <Image style={{
            width: 15,
            height: 15,
            marginStart: 10,
            marginBottom:40
            //borderRadius: 5,
          }} resizeMode={'contain'} source={require('../../assets/13.15-Payment-Activity/arrow_down_1.png')} />
          
          <View style={{
              width: '40%',  
              marginStart: 10, 
              //marginEnd: 10 ,
              textAlign: 'left'
            }}>
              <Text style={{  
                fontStyle:'normal',
                color:'#808080',
                fontSize:15 }}>
                Paid Amount </Text>
              <Text style={{ 
                fontWeight: 'bold',
                color:'#00C8E4',
                fontSize:18
                }}>
                25,000 </Text>
              <Text style={{ 
                 fontStyle:'normal',
                 color:'#B3B3B3',
                 fontSize:15
                 }}>
                AED </Text>
          </View>

        </View>

        <View style={{
          marginStart: 10,
          marginEnd: 10,
          marginTop:20,
          width: '100%',
          borderWidth: 1,
          borderColor: '#F2F2F2'
        }} />

        <View style={styles.buttonContainer}>
          <Image style={{
              width: 15,
              height: 15,
              //marginStart: 20,
              marginBottom:40
              //borderRadius: 5,
            }} resizeMode={'contain'} source={require('../../assets/13.15-Payment-Activity/arrow_back_1.png')} />
          <View style={{ width: '80%', marginTop: -40 }}>
            <Text style={{ textAlign:'center'  }}>
                2020
            </Text>
          </View>
          <Image style={{
            width: 15,
            height: 15,
            marginStart: 20,
            marginBottom:40
            //borderRadius: 5,
          }} resizeMode={'contain'} source={require('../../assets/13.15-Payment-Activity/arrow_next_1.png')} />
          
        </View>

        <View style={{
          marginStart: 20,
          marginEnd: 20,
          marginTop:-30,
          width: '96%',
          borderWidth: 1,
          borderColor: '#F2F2F2'
        }} />
        
        <Text style={styles.textLabel1}>
              OCTOBER- 2020  
        </Text>

        <View style={{
          marginStart: 20,
          marginEnd: 20,
          //marginTop:-30,
          width: '96%',
          borderWidth: 1,
          borderColor: '#F2F2F2'
        }} />

        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
          }}>
          <Text style={styles.textLabel2}> Transfer Amount </Text>
          <Text style={styles.textLabel2}> 10,000 AED </Text>
        </View>
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View style={[{
            marginStart: 20,
            width: "45%",
            height: 50,
            borderWidth: 1,
            backgroundColor: "#FFFFFF",
            borderColor: '#F2F2F2',
            }]}>
            <Text style={{
              width:'100%',
              color:'#999999'
            }}> Bank Reference ID</Text>
            <Text style={{
              width:'100%'
            }}> 9876549876549</Text>
          </View>
          <View style={[{
            marginStart: 20,
            marginEnd: 20,
            height: 50,
            width: "45%",
            borderWidth: 1,
            backgroundColor: "#FFFFFF",
            borderColor: '#F2F2F2',
            }]}>
            <Text style={{
              width:'100%',
              color:'#999999'
            }}> Bank A/c No.</Text>
            <Text style={{
              width:'100%'
            }}> 56852365489213</Text>
          </View>

        </View>
          
        <Text style={{
          width:'100%',
          color:'#999999',
          fontSize:15,
          marginTop:10,
          marginStart: 20,
          marginBottom: 10,
         }}>
          20 Oct, 05:30 PM  
        </Text>
          
        <View style={{
          marginStart: 20,
          marginEnd: 20,
          //marginTop:-30,
          width: '96%',
          borderWidth: 1,
          borderColor: '#F2F2F2'
        }} />

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
    //marginStart: 60,
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
  textLabel1: {
    textAlign: 'left',
    marginStart: 8,
    marginBottom: 8,
    color: '#CCCCCC',
    marginTop: 16,
    fontWeight: 'bold',
    width: "94%",
    fontSize:13 
  },
  textLabel2: {
    textAlign: 'left',
    marginStart: 8,
    marginBottom: 8,
    color: '#00C8E4',
    marginTop: 16,
    fontStyle:'normal',
    width: "94%",
    fontSize:13 
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
