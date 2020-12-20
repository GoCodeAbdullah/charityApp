import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View ,Image } from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';


export default function Login(){
      return(
            <View style={style.container}>
                <Logo />
                <LoginForm />
            </View>
        );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    }

});