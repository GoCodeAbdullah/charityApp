import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image 
        style style={styles.tinyLogo}
        source={require('./assets/images/logo.png')}>
        </Image>
        <Text>Chariry For Humanity</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  tinyLogo: {
    width: 200,
    height: 185,
  },
  textStyle:{
    fontFamily: 'Lobster',
  }
});
