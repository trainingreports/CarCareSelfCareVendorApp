import React,{useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const Loading = (props) => {

  const getId = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      return value;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getId().then(id => {
      if(id){
        props.navigation.navigate('App')
      }
      else{
        props.navigation.navigate('Login')
      }
    })
  }, [props])
    return (
        <ImageBackground
        style={{flex:1}}
        source={require('../assets/splash.png')}
        >

        </ImageBackground>
    )
}

export default Loading;
