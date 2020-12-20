import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
import Logo from '../components/Logo';
import SignupForm from '../components/SignupForm';


export default function Login(){
      return(
            <View style={style.container}>
                <Logo />
                <SignupForm />
            </View>
        );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
});