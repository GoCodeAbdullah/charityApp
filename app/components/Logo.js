
import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
import { useFonts,Lobster_400Regular } from '@expo-google-fonts/lobster'

 

export default function Logo(logoWidth) {

let [fontsLoaded]=useFonts({
        Lobster_400Regular ,
    });

  return (
      <View style={styles.logoCon}>
        <Image 
        style style={styles.tinyLogo}
        source={require('../assets/images/logo.png')}>
        </Image>
        <Text style={styles.textStyle}>Charity for Humanity</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  
  tinyLogo: {
    width: 200,
    height: 185,
  },
  textStyle:{
    width:150,  
    fontSize: 24,
    textAlign:'center',
    color: '#68BD24',
  },
  logoCon:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});