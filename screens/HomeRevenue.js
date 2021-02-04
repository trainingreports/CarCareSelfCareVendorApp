import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, SafeAreaView, Image, FlatList, StyleSheet } from "react-native";

class HomeRevenue extends React.Component {
    state = {
        revenueData: [
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3adfsdfd53abb28ba',
                title: 'First Item',
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbdsdf91aa97f63',
                title: 'Second Item',
            },
            {
                id: '58694a0f-3da1-471f-bd96-145sdf571e29d72',
                title: 'Third Item',
            },
            {
                id: '58694a0f-3dsdfa1-471f-bd96-145571e29d72',
                title: 'Third Item',
            },
        ]
    }
    renderItem = ({ item }) => {
        console.log(item.title)
        return (
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
        )
    }
    render() {
        return (
            <ScrollView>
                <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
                    <View style={{
                        width: '85%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 24,
                    }}>
                        <Text style={{
                            width: '33%',
                            margin: 4,
                            padding: 6,
                            textAlign:'center',
                            borderRadius: 32,
                            color: '#FFFFFF',
                            backgroundColor: '#00C8E4'
                        }}>
                            Daily
                        </Text>
                        <Text style={{
                            width: '33%',
                            margin: 4,
                            textAlign:'center',
                            padding: 6,
                            borderRadius: 32,
                            color: '#808080',
                            backgroundColor: '#E6E6E6'
                        }}>
                            Weekly
                        </Text>
                        <Text style={{
                            width: '33%',
                            margin: 4,
                            padding: 6,
                            textAlign:'center',
                            borderRadius: 32,
                            color: '#808080',
                            backgroundColor: '#E6E6E6'
                        }}>
                            Monthly
                        </Text>
                    </View>
                    <Image
                        style={{ width: '100%', height: 140, marginTop: 26, }}
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
                        }}>
                            PAYMENT HISTORY
                        </Text>
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                            }}
                            resizeMode={'cover'}
                            source={require('../assets/11.1-Revenue-Daily/download_report.png')}
                        />
                    </View>
                    <View style={styles.view}></View>
                    <SafeAreaView style={styles.containerList}>
                        <FlatList
                            data={this.state.revenueData}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                </View>
            </ScrollView>
        );
    }
}

export default HomeRevenue;

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerList: {
        width: "100%",
        marginTop: StatusBar.currentHeight || 0,
    },
    view: {
        width: "90%",
        marginBottom: 16,
        marginTop: 16,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
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
});