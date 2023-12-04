import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview'  ;
import Getjsonfile from '../Getjsonfile';
import Callapi from '../Callapi';

const webmap = require('./peta/map.html');

const Tab = createBottomTabNavigator();

function HomeScreen() {
return (
    <ScrollView>
        <Text style={ styles.title }>My Maps</Text>
        <View style={ styles.listitems }>
            <Image source={require('./peta/peta1.png')} style={styles.image}></Image>
            <Text style={ styles.caption }> Peta Orde Sungai </Text>
        </View>

        <View style={ styles.listitems }>
            <Image source={require('./peta/peta2.png')} style={styles.image}></Image>
            <Text style={ styles.caption }> Peta Transformasi NDVI </Text>
        </View>

        <View style={ styles.listitems }>
            <Image source={require('./peta/peta1.png')} style={styles.image}></Image>
            <Text style={ styles.caption }> Peta Orde Sungai </Text>
        </View>

        <View style={ styles.listitems }>
            <Image source={require('./peta/peta1.png')} style={styles.image}></Image>
            <Text style={ styles.caption }> Peta Orde Sungai </Text>
        </View>
    </ScrollView>
);
}
function Maps() {
return (
    <WebView source={ webmap }/>
);
}
function Profile() {
return (
    <View>
        <Portofolio />
    </View>
);
}
function Datamahasiswa() {
return (
    <View>
        <Callapi />
    </View>
);
}
function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
	tabBarLabel: 'Home',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="home" color={color} size={size} />
	),
}}
/>
      <Tab.Screen name="Maps" component={Maps} options={{
	tabBarLabel: 'Maps',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="map" color={color} size={size} />
	),
}} />
      <Tab.Screen name="Profile" component={Profile} options={{
	tabBarLabel: 'Profile',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="user" color={color} size={size} />
	),
}} />
      <Tab.Screen name="Mahasiswa" component={Datamahasiswa} options={{
	tabBarLabel: 'Data Mahasiswa',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="users" color={color} size={size} />
	),
}} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'stretch',
    },

    listitems: {
        padding: 10,
        alignItems: 'center',
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.red,        
    },
});