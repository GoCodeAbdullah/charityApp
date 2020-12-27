import React, { useRef } from "react";
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Avatar, Text } from "react-native-elements";
import Header from "../components/Header";


const OrginzationView=({route})=>{

    const profile = route?.params?.profile;
    const scrollView = useRef();
    const x = profile.pic;
    return(
        <View style={styles.container}>
          
          <ScrollView>
            <View style={styles.imageContainer}>
              <Image
                  style={styles.image}
                  source={x}
              />

             </View>
             <View style={styles.textContainer}>
               <Text style={styles.headText}>
                 {profile.name}
               </Text>
               <Text style={styles.textStyle}>
                 {profile.about}
               </Text>
               <Text style={styles.textStyle}>
                 {profile.about}
               </Text>
               <Text style={styles.textStyle}>
                 {profile.about}
               </Text>
               {/* Bank */}
               <Text style={styles.secondHead} >
                 Bank Account Number
               </Text>
               <Text style={styles.textStyle}>
                 {profile.bankAccount}
               </Text>
               {/* Contact */}
               <Text style={styles.secondHead} >
                 Contact Number
               </Text>
               <Text style={styles.textStyle}>
                 {profile.contact}
               </Text>

               

             </View>

             <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Not Assigned</Text>
              </TouchableOpacity>
              
          </ScrollView>
        </View>


    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F9F9F9",
      alignItems: "center",
      justifyContent: "center"
    },
    imageContainer:{
      
    },
    image:{     
      width: "100%",
      height: 300
    },
    textContainer:{
      paddingHorizontal: 15,
      paddingVertical: 10
    },
    headText:{
      fontSize: 30,
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: 20
    },
    textStyle:{
      fontSize: 18,
      color: "#333",
      textAlign: "justify"
    },
    secondHead:{
      fontSize: 24,
      marginVertical: 20,
      fontWeight: "bold"
    },
    button:{
        
      width: 250,
      height: 55,
      backgroundColor: "#94ED4F",
      alignItems: 'center',
      borderRadius: 10,
      justifyContent: 'center',
      marginVertical: 40,
      alignSelf: "center"
  
    },
    buttonText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: "#fff",
    },





  });


  export default OrginzationView;


  // <View style={styles.header}>
  //               <View style={styles.upperContainer}>
  //                   <View style={styles.profileContainer}>
  //                   <View>
  //                       <Avatar
  //                       rounded
  //                       icon={{ name: "user", type: "font-awesome" }}
  //                       containerStyle={styles.avatarIcon}
  //                       size="large"
  //                       />
  //                   </View>
  //                   <View
  //                       style={{
  //                       flexDirection: "column",
  //                       justifyContent: "center",
  //                       paddingLeft: 10,
  //                       }}
  //                   >
  //                       <View style={styles.headingContainer}>
  //                           <Text style={styles.headingText} numberOfLines={3}>
  //                               {profile.name}
  //                           </Text>
  //                           </View>
  //                           <View style={styles.withIconHeading}>
  //                           <Text style={styles.subheadingText}>{profile.contact}</Text>
  //                           </View>
  //                           <View style={styles.withIconHeading}>
  //                           <Text style={styles.subheadingText}>
  //                               CGPA: {profile.id}
  //                           </Text>

  //                   </View>

                        
  //               </View>
  //           </View>

  //           </View>
  //        </View>