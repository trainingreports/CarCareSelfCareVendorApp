import { StatusBar } from 'expo-status-bar';

import * as React from 'react';

import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, style }) => (
  <View>

    <View style={{ flexDirection: 'row', width: '98%', marginTop: 8, justifyContent: 'flex-start' }}>
      <Image
        style={{
          width: 30,
          height: 30,
          borderRadius: 100
        }}
        resizeMode={'cover'}
        source={require('../assets/app-icon.jpg')}
      />

      <View style={{
        marginStart: 8,
      }}>

        <Text style={{ fontWeight: 'bold' }}> Heading Here </Text>
        <Text style={{ color: '#808080', fontSize: 12 }}>Lorem ipsum, or lipsum as it is sometimes known,\n is dummy text used in laying out print,\n graphic or web designs. </Text>
        <Text style={{ color: '#999999', fontSize: 11 }}>15 August 2020, 05:12 PM</Text>
      </View>

    </View>

    <View style={{
      borderBottomColor: '#E6E6E6',
      marginTop: 8,
      width: "100%",
      borderBottomWidth: 1,
    }}
    />

  </View>
);

const Notification = () => {
  //const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    //const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
      //style={{ backgroundColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ width: '98%' }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        //extraData={selectedId}
        />
      </SafeAreaView>
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
