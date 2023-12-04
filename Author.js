import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Linking } from 'react-native';

const Author = ({ navigation }) => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ImageBackground
      source={require('./rs.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.appName}>TENTANG AUTHOR</Text>
        </View>

        <View style={styles.content}>
          <Image
            source={require('./della.jpeg')} // Ganti dengan path foto author Anda
            style={styles.authorImage}
          />
          <Text style={styles.description}>
            Saya adalah mahasiswa program studi Sarjana Terapan Sistem Informasi Geografis SV UGM yang senang mempelajari tentang pemrograman
            website dan mobile. Jika ingin berdiskusi bersama silakan kontak saya disini.
          </Text>
          <TouchableOpacity onPress={() => openLink('https://instagram.com/dellamncaa')}>
            <Text style={styles.contactInfo}>Instagram: @dellamncaa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/della-monica-b93923219')}>
            <Text style={styles.contactInfo}>LinkedIn: Della Monica</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://github.com/dellamncaa')}>
            <Text style={styles.contactInfo}>GitHub: dellamncaa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('mailto:dellamncaa@gmail.com')}>
            <Text style={styles.contactInfo}>Email: dellamncaa@gmail.com</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'rgba(208, 212, 202, 0.9)',
    justifyContent: 'center',
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
    alignItems: 'center',
    marginBottom: 30,
  },
  authorImage: {
    width: 200,
    height: 200,
    borderRadius: 30,
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    marginHorizontal: 0,
  },
  contactInfo: {
    textAlign: 'center',
    color: '#3C79F5',
    fontSize: 16,
    marginTop: 10,
  },
});

export default Author;
