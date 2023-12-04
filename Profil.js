import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const Profil = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./rs.jpg')} // Ganti dengan path gambar background Anda
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.appName}>TENTANG APLIKASI</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.description}>
            Aplikasi ini merupakan aplikasi untuk mencari rumah sakit di Bandung Raya. Stack yang digunakan dalam aplikasi ini adalah:
          </Text>
          <Text style={styles.tekss}>
            1. React native
          </Text>
          <Text style={styles.tekss}>
            2. HTML
          </Text>
          <Text style={styles.tekss}>
            3. LeafletJS
          </Text>
          <Text style={styles.tekss}>
            4. Google Spreadsheets
          </Text>
          <Text style={styles.tekss}>
            5. Apps Script
          </Text>
          <Text style={styles.tekss}>
            6. FontAwesome5
          </Text>
          <Text style={styles.tekss}>
            7. Github
          </Text>
          <Text style={styles.description}>
            Harapan dibuatnya aplikasi ini adalah dapat membantu warga Bandung dan sekitarnya dalam mencari informasi rumah sakit yang terdaftar
            secara resmi di Kementrian Kesehatan
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} accessibilityRole="button"
            onPress={() => navigation.navigate('Author')}>Tentang Author</Text>
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
    backgroundColor: 'rgba(245, 232, 199, 0.9)', // Warna latar belakang dengan transparansi
    justifyContent: 'center',
    marginTop: 0,
    padding: 50,
    borderRadius: 50,
  },
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  content: {
    alignItems: 'justify',
    marginBottom: 30,
  },
  description: {
    textAlign: 'justify',
    color: '#191919',
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: 0,
  },
  tekss: {
    textAlign: 'left',
    fontSize: 16,
    marginHorizontal: 20,
    color: '#363062',
  },
  button: {
    backgroundColor: 'rgba(54, 48, 98, 0.7)',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Profil;
