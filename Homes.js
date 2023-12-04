import React from 'react';
import { View, Text, StyleSheet,Image, ImageBackground, TouchableOpacity } from 'react-native';

const Homes = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./rs.jpg')} // Ganti dengan path gambar latar belakang Anda
      style={styles.background}
    >
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.appName}>SRASANDUNG</Text>
        </View>

        <View style={styles.content}>
          <Image
            source={require('./rs2.jpeg')}
            style={styles.image}
          />
          <Text style={styles.description}>
            Aplikasi pencari rumah sakit di Bandung Raya
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          accessibilityRole="button"
          onPress={() => navigation.navigate('Getdata')}
        >
          <Text style={styles.buttonText}>Cari Rumah Sakit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          accessibilityRole="button"
          onPress={() => navigation.navigate('Maps')}
        >
          <Text style={styles.buttonText}>Lihat Peta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          accessibilityRole="button"
          onPress={() => navigation.navigate('Profil')}
        >
          <Text style={styles.buttonText}>Tentang</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(54, 48, 98, 0.8)', // Warna latar belakang dengan transparansi
    justifyContent: 'center',
    padding: 50,
    borderRadius: 50,
  },
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    color: '#555',
    marginBottom: 10,
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 50,
  },
  button: {
    backgroundColor: 'rgba(245, 232, 199, 0.7)',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Homes;
