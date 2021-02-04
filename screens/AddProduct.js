
import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
  Image
} from 'react-native';

import { StackNavigator } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//const [isSelected, setSelection] = useState(false);

class AddProduct extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textHeading}> Add Project </Text>

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

          <Text style={styles.textLabel}> Available Product Quantity </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Product Quantity"
          />

          <Text style={styles.textLabel}> Product Brand </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Select Product Brand"
          />

          <Text style={styles.textLabel}> Product Weight / Size </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Select Product Weight / Size"
          />

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
              width: 140,
              height: 140,
              marginTop: 26
            }}
            resizeMode={'cover'}
            source={require('../assets/9.4-Service-Add/image_placeholder.png')}
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

export default AddProduct;

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
