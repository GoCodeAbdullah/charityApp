import React from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Logo from '../components/Logo';



export default function Signup({navigation}){
      return(
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                <Logo />
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
                    <TouchableOpacity style={styles.button}
                    onPress={()=>navigation.navigate("Orginzations")} 
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity >     
                </View>
                </ScrollView>
            </View>
        );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
        
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
    },
    scroll:
    {
        backgroundColor:"#ffffff"

    }
});