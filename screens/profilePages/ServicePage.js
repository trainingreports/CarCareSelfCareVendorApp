// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {URL} from '../../DomainConstant';
import StarRating from "react-native-star-rating";

const ItemService = ({ item }) => (
  <View style={styles.item}>
    <View style={styles.buttonContainer}>
      <Image
        style={{
          width: 108,
          height: 108
        }}
        resizeMode={"cover"}
        source={{ uri:`https://xionex.in/CarCare/public/vendor/upload/${item.image}` }}
      />

      <View style={{ width: "76%", marginStart: 10, marginEnd: 10 }}>
        <Text style={{ width: "98%", textAlign: "left" }}>
         {item.name}
        </Text>
        <Text style={{ width: "50%", fontWeight: "bold" }}>{item.price} AED </Text>
        <View style={{ width: "25%"}}>
        <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={parseInt(item.avg_rating)}
                  starSize={14}
                  starStyle={{
                    color: "#FFB74D"
                  }}
                />
        </View>
        <Text style={{ width: "98%", color: "#B3B3B3" }}>
          {item.description}
        </Text>
        <Text style={{ width: "98%", color: "#808080" }}> {item.updated_at} </Text>
      </View>
    </View>
  </View>
);

const ServicePage = ({ navigation }) => {
  const [services, setServices] = React.useState([]);

  const getRole = async () => {
    try {
      const value = await AsyncStorage.getItem("self");
      return value;
    } catch (e) {
      console.log(e);
    }
  };

  const getId = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      return value;
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getId().then(id => {
      getRole().then(role => {
        if (role === "true") {
          var formdata = new FormData();
          formdata.append("user_id", id);

          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
          };

          fetch(
            `${URL}my-self-service`,
            requestOptions
          )
            .then(response => response.json())
            .then(result => {
              if (result.status) {
                console.log(result.data);
                setServices(result.data);
              } else {
              }
            })
            .catch(error => console.log("error", error));
        } else {
          var formdata = new FormData();
          formdata.append("user_id", id);

          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
          };

          fetch(
            `${URL}my-car-service`,
            requestOptions
          )
            .then(response => response.json())
            .then(result => {
              if (result.status) {
                console.log(result.data);
                setServices(result.data);
              } else {
              }
            })
            .catch(error => console.log("error", error));
        }
      });
    });
  }, []);
  const renderItem = ({ item }) => <ItemService item={item} />;

  return (
    <SafeAreaView style={styles.containerList}>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => (
          <Text
            style={{
              alignSelf: "center",
              marginTop: 10
            }}
          >
            No Services Yet
          </Text>
        )}
      />
    </SafeAreaView>
    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={{ flex: 1, padding: 16 }}>
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
    //         Home{'\n'}(You are on FirstPage)
    //       </Text>
    //       <TouchableOpacity
    //         style={styles.button}
    //         onPress={() => navigation.navigate('SecondPage')}>
    //         <Text>Go to settng Tab</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
    //       React Native Tab Navigation
    //     </Text>
    //     <Text
    //       style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
    //       www.aboutreact.com
    //     </Text>
    //   </View>
    // </SafeAreaView>
  );
};

export default ServicePage;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 8,
    width: "92%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
