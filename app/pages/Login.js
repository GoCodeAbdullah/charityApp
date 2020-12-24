import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View ,TextInput, Button  , TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';



export default function Login({navigation}){
      return(
            <View style={styles.container}>
                <Logo />
                <View>
                    <TextInput
                    style={styles.inputText} 
                    placeholder="Username"
                    />
                    <TextInput
                    style={styles.inputText} 
                    placeholder="Password"
                    secureTextEntry={true}
                    />

                    <TouchableOpacity style={styles.button} 
                     onPress={()=>navigation.navigate("Orginzations")}                       
                    >
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    

                    <Text style={styles.unText}>OR</Text>

                    <TouchableOpacity style={styles.button} 
                     onPress={()=>navigation.navigate("signup")}                       
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>                  
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
        
    },
    inputText:{
        width: 300,
        height: 55,
        backgroundColor: "#F2F2F2",
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 18,
        marginBottom: 20
    },
    button:{
        
      width: 300,
      height: 55,
      backgroundColor: "#94ED4F",
      alignItems: 'center',
      borderRadius: 10,
      justifyContent: 'center'
  
    },
    buttonText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: "#fff",
    },
    unText:{
  
      fontSize: 18,
      color: "#696868",
      marginVertical: 12,
      fontWeight: "bold",
      textAlign: "center"
    },


});