import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TextInput,
  ImageBackground,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

const Callapi = () => {
  const jsonUrl =
    'https://script.google.com/macros/s/AKfycbwpy3tPSJDslUWT9sbNX_pvqHqVLIC1JwoOSaJjr4enjJnCgG6O_ez8zqIqEGrmLuyE/exec';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function refreshPage() {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <ImageBackground
      source={require('./rs.jpg')} // Ganti dengan path gambar latar belakang Anda
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <TextInput
          placeholder="Cari Rumah Sakit"
          style={styles.searchInput}
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
        {isLoading ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : (
          <FlatList
            data={dataUser.filter(item =>
              item.nama.toLowerCase().includes(searchText.toLowerCase())
            )}
            onRefresh={() => {
              refreshPage();
            }}
            refreshing={refresh}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity
                accessibilityRole="button"
                onPress={() => {
                  Linking.openURL(
                    `google.navigation:q=${item.latitude},${item.longitude}`
                  );
                }}
                style={styles.linkContainer}
              >
                <View>
                  <View style={styles.card}>
                    <View>
                      <Text style={styles.cardtitle}>{item.nama}</Text>
                      <Text style={styles.tekskecil}>Jenis: {item.jenis}</Text>
                      <Text style={styles.tekskecil}>
                        Alamat: {item.deskripsi}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                      }}
                    >
                      {/* <FontAwesome5
                        name="directions"
                        size={20}
                      /> */}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            ListHeaderComponent={() => null} // Header tidak perlu menggunakan ScrollView
          />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Callapi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    paddingVertical: 12,
    backgroundColor: '#333',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatar: {
    borderRadius: 100,
    width: 80,
  },
  cardtitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    padding: 25,
    borderRadius: 10,
    backgroundColor: 'rgba(54, 48, 98, 0.7)',
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
  },
  button: {
    marginVertical: 10,
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 10,
  },
  tekskecil: {
    color: 'white',
  },
  linkContainer: {
    Color: 'rgba(54, 48, 98, 0.7)',
  },
});
