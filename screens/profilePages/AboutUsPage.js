// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';

const AboutUsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ width: '90%', marginTop:16, color: '#999999', fontWeight: 'bold' }}>DESCRIPTION</Text>
      
      <View style={styles.view} />
      
      <Text style={{ width: '90%', color: '#666666', fontSize:13 }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
      
      <View style={styles.view} />
      
      <Text style={{ width: '90%', color: '#999999', fontWeight: 'bold' }}>CONTACT</Text>
      
      <View style={styles.view} />

      <Text style={{ width: '90%', color: '#999999', fontSize:13 }}>CALL</Text>
      <Text style={{ width: '90%', color: '#666666', fontSize:13 }}>+91 3426768347834</Text>
      
      <Text style={{ width: '90%', color: '#999999', fontSize:13, marginTop:4 }}>EMAIL</Text>
      <Text style={{ width: '90%', color: '#666666', fontSize:13 }}>test@gmail.com</Text>
      
      <View style={styles.view} />
      
      <Text style={{ width: '90%', color: '#999999', fontWeight: 'bold' }}>ADDRESS</Text>
      
      <View style={styles.view} />

      <Text style={{ width: '90%', color: '#666666', fontSize:13 }}>Lorem ipsum, or lipsum as it is sometimes known.</Text>
      
      <View style={styles.view} />
      
    </View>
    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={{ flex: 1 , padding: 16}}>
    //     <View
    //       style={{
    //         flex: 1,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}>
    //       <Text
    //         style={{
    //           fontSize: 25,
    //           textAlign: 'center',
    //           marginBottom: 16
    //         }}>
    //         Setting{'\n'}(You are on SecondPage)
    //       </Text>
    //       <TouchableOpacity
    //         style={styles.button}
    //         onPress={() => navigation.navigate('FirstPage')}>
    //         <Text>Go to Home Tab</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
    //     React Native Tab Navigation
    //     </Text>
    //     <Text
    //       style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
    //       www.aboutreact.com
    //     </Text>
    //   </View>
    // </SafeAreaView>

  );
}

export default AboutUsPage;


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
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
  },
  view: {
    width: "90%",
    marginBottom: 16,
    marginTop:16,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
  },
});
