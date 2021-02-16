
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StackActions } from '@react-navigation/native';
import {
  ScrollView, ImageBackground,
  Button,
  StyleSheet,
  Text,
  CheckBox,
  TextInput,
  TouchableOpacity,
  View,
  Picker,
  Image
} from 'react-native';

//const [isSelected, setSelection] = useState(false);

class AddCarService extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <Text style={styles.textHeading}> Add Service </Text> */}

          <Text style={styles.textLabel}> Category * </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Select Category"
          />

          <Text style={styles.textLabel}> Product Name * </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Product Name"
          />

          <Text style={styles.textLabel}> Price * </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Price"
            defaultValue=""
          />
        
        <Text style={styles.textLabel}> Select Place </Text>
            <View style={{ borderRadius: 4, borderWidth: 1, borderColor: 'gray', width: "94%", backgroundColor:'#ffffff' }}>
              <Picker 
              style={{height:36}}
              mode="dropdown"              
                //selectedValue={selectedValue}      
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}                        >
                <Picker.Item label="Select Place" color="#B3B3B3" fontSize="10" value="Select Place" />
                <Picker.Item label="Home" color="#B3B3B3" fontSize="10" value="Home" />
                <Picker.Item label="Shop" color="#B3B3B3" fontSize="10" value="Shop" />
                <Picker.Item label="Both" color="#B3B3B3" fontSize="10" value="Both" />
              </Picker>
            </View>

          <Text style={styles.textLabel}> Discount </Text>
          <View style={[{
            width: "94%",
            marginStart: 10,
            marginEnd: 10,
            flexDirection: 'row',
            borderWidth: 1,
            backgroundColor: "#FFFFFF",
            borderRadius: 4,
          }]}>
            <TextInput
              style={{
                height: 40,
                width: "94%",
                padding: 10,
              }}
              placeholder="Enter Discount"
            />
            <Text style={{ padding: 10, color: '#999999' }}>%</Text>

          </View>

          <Text
            style={styles.textLabel}> Description </Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter Description"
            numberOfLines={10}
            multiline={true}
          />

          <Text
            style={styles.textLabel}> Specifications </Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter Specifications"
            numberOfLines={10}
            multiline={true}
          />

          <Text
            style={styles.textLabel}> Product Image </Text>
          <Image
            style={{
              width: '94%',
              height: 160,
            }}
            resizeMode={'cover'}
            source={require('../../assets/9.4-Service-Add/image_placeholder.png')}
          />
          
          <Text
            style={styles.textLabel}> Service Time(hh:mm) </Text>
          <TextInput
            style={styles.textInput}
            placeholder="00:00"
          />

          <View style={[{
            width: "94%",
            marginStart: 10,
            marginEnd: 10,
            marginTop: 10,
            marginBottom: 56,
            backgroundColor: "#FFFFFF",
            borderRadius: 4,
          }]}>
            <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop())}>
              <Text style={{
                textAlign: 'center',
                padding: 10,
                color: '#00C8E4',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
                SUBMIT
                </Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
  }

}

export default AddCarService;

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
