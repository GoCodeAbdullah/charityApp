import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button, TouchableOpacity } from 'react-native';


 

export default function SignupForm() {


  return (
      <View style={styles.container}>
          <TextInput
          style={styles.inputText} 
          placeholder="Name"
          />
          <TextInput
          style={styles.inputText} 
          placeholder="Email"
          />
          <TextInput
          style={styles.inputText} 
          placeholder="Phone Number"
          />
          <TextInput
          style={styles.inputText} 
          placeholder="Username"
          />
          <TextInput
          style={styles.inputText} 
          placeholder="Password"
          secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
    
        
      </View>
  );
}

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
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
    justifyContent: 'center',
    marginBottom:20,

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
    fontWeight: "bold"
  }
});