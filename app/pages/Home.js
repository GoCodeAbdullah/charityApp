import React from "react";
import { FlatList, StyleSheet, Text, ImageBackground, TouchableOpacity} from "react-native";

export default function Home({navigation}){

    return (

    

     
        
        <ImageBackground style={styles .image} source={require("../assets/images/index.jpg")} >
  
  
  
        
        
        <Text style={styles.title}>Help Others!</Text>
  
        <TouchableOpacity style={styles.button} 
                     onPress={()=>navigation.navigate("Orginzations")}                       
        >
                        <Text style={styles.buttonText}>Explore More </Text>
        </TouchableOpacity> 


        <TouchableOpacity style={styles.button} 
                     onPress={()=>navigation.navigate("about")}                       
        >
                        <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity> 
  
      
        
        
        </ImageBackground>
  
  
        
  
  
  
        
    );

}

const styles = StyleSheet.create({
    image: {
        
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      
    },
    title: {
      fontSize: 70,
      fontWeight: 'bold',
      color: 'white',
      width: '65%',
      marginLeft: 25,
    },
    button: {
      backgroundColor: '#fff',
      width: 200,
      height: 40,
      borderRadius: 10,
      marginTop: 25,
      marginLeft: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  
    
    
  });