import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview'  ;
import Getjsonfile from '../Getjsonfile';
import Callapi from '../Callapi';
import Homes from '../Homes';
import Getdata from '../Getdata';
import Profil from '../Profil';
import Author from '../Author';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

//Form input dari github pages
const formInput = 'https://dellamncaa.github.io/pgpbl-12/';

//Peta web dari github pages
const webmap = 'https://dellamncaa.github.io/srasandung/map.html';

const Stack = createStackNavigator();

function HomeScreen() {
return (
    <View>
        <Homes />
    </View>
);
}
function Maps() {
return (
    <WebView source={ { uri: webmap } }/>
);
}
function AddDataScreen() {
return (
    <Getdata />
);
}
function Profile() {
return (
    <View>
        <Profil />
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
        <Stack.Navigator initialRouteName="Homes" screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#333', // Warna latar belakang navigation bar pada dark mode
            },
            headerTintColor: '#fff', // Warna teks pada navigation bar
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="Homes" component={Homes} options={{title: 'Beranda'}}  />


          <Stack.Screen name="Getdata" component={Getdata} options={({ navigation }) => ({title: 'Daftar Rumah Sakit', 
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Homes')}>
              <Fontawesome5 name="home" size={25} color="#fff" style={{ marginLeft: 20 }}/>
            </TouchableOpacity>),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
              <Fontawesome5 name="map-marked-alt" size={25} color="#fff" style={{ marginRight: 20 }} />
            </TouchableOpacity>),})} />


          <Stack.Screen name="Maps" component={Maps} options={({ navigation }) => ({title: 'Peta Lokasi Rumah Sakit', 
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Homes')}>
              <Fontawesome5 name="home" size={25} color="#fff" style={{ marginLeft: 20 }}/>
            </TouchableOpacity>),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Getdata')}>
              <Fontawesome5 name="bars" size={25} color="#fff" style={{ marginRight: 20 }} />
            </TouchableOpacity>),})} />


          <Stack.Screen name="Profil" component={Profil} options={({ navigation }) => ({title: 'Tentang Aplikasi', 
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Homes')}>
              <Fontawesome5 name="home" size={25} color="#fff" style={{ marginLeft: 20 }}/>
            </TouchableOpacity>),
          })} />


          <Stack.Screen name="Author" component={Author} options={{title: 'Tentang Author'}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
//     <NavigationContainer>
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen name="Home" component={HomeScreen} options={{
// 	tabBarLabel: 'Beranda',
// 	tabBarIcon: ({ color, size }) => (
//   		<Fontawesome5 name="home" color={color} size={size} />
// 	),
// }}
// />
//       <Tab.Screen name="Maps" component={Maps} options={{
// 	tabBarLabel: 'Peta',
// 	tabBarIcon: ({ color, size }) => (
//   		<Fontawesome5 name="map-marked-alt" color={color} size={size} />
// 	),
// }} />
//       <Tab.Screen name="Add Data" component={AddDataScreen} options={{
// 	tabBarLabel: 'Daftar RS',
// 	tabBarIcon: ({ color, size }) => (
//   		<Fontawesome5 name="list" color={color} size={size} />
// 	),
// }} />
//       <Tab.Screen name="Profile" component={Profile} options={{
// 	tabBarLabel: 'Tentang',
// 	tabBarIcon: ({ color, size }) => (
//   		<Fontawesome5 name="info" color={color} size={size} />
// 	),
// }} />
      

//     </Tab.Navigator>
//     </NavigationContainer>

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
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.ruda,
    },
    title: {
        fontSize: 20,
        marginTop: 250,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.black,        
    },
    container: {
        marginTop: 20,
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: Colors.krem,
    },
    
});