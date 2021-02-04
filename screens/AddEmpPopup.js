import React from 'react';
import SkyLight from 'react-skylight';
import { StatusBar } from 'expo-status-bar';
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


class Example extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <section>
          <h1>Add Employee</h1>
          <button onClick={() => this.simpleDialog.show()}>Add</button>
        </section>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="">
          <ScrollView>
            <View style={styles.container}>
              <Text style={styles.textHeading}>Add Employee </Text>
              <View style={{
                width: '96%',
                borderWidth: 1,
                borderColor: '#F2F2F2'
              }} />
              <View style={styles.buttonContainer}>
                <Image
                  style={{
                    width: '96%',
                    height: 200,
                  }}
                  resizeMode={'contain'}
                  source={require('./assets/13.8-Add-Emp-Availity-Form/add_photo.png')}
                />
              </View>
              
              <Text style={styles.textLabel}>Name </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Name"
              />
              <View style={[{
                  width: "96%",
                  //marginStart: 10,
                  //marginEnd: 10,
                  marginTop: 10,
                  //marginBottom: 56,
                  backgroundColor: "#00C8E4",
                  borderRadius: 4,
                }]}>
                  <TouchableOpacity>
                    <Text style={{
                      textAlign: 'center',
                      padding: 2,
                      color: '#fff',
                      fontSize: 15,
                      //fontWeight: 'bold',
                    }}>
                    Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              <View style={{
                marginBottom: 10
              }}></View>
              <StatusBar style="auto" />
            </View>
          </ScrollView>
        </SkyLight>
      </div>
    )
  }
}

Example.displayName = 'Example';

export default Example;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 10,
    //marginStart: 60,
  },
  textHeading: {
    fontSize: 15,
    marginBottom: 10,
    //marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    width: "96%",
    //color:'#4D4D4D'
  },
  textLabel: {
    textAlign: 'left',
    //marginStart: 8,
    marginBottom: 10,
    color: '#000000',
    marginTop: 20,
    fontStyle:'normal',
    width: "96%",
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
  textInput: {
    height: 30,
    width: "96%",
    padding: 10,
    borderRadius: 4,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
  },

});
