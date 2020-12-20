import React, { useRef } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Avatar, Text } from "react-native-elements";



const OrginzationView=({route})=>{

    const profile = route?.params?.profile;
    const scrollView = useRef();
    return(

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.upperContainer}>
                    <View style={styles.profileContainer}>
                    <View>
                        <Avatar
                        rounded
                        icon={{ name: "user", type: "font-awesome" }}
                        containerStyle={styles.avatarIcon}
                        size="large"
                        />
                    </View>
                    <View
                        style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingLeft: 10,
                        }}
                    >
                        <View style={styles.headingContainer}>
                            <Text style={styles.headingText} numberOfLines={3}>
                                {profile.name}
                            </Text>
                            </View>
                            <View style={styles.withIconHeading}>
                            <Text style={styles.subheadingText}>{profile.contact}</Text>
                            </View>
                            <View style={styles.withIconHeading}>
                            <Text style={styles.subheadingText}>
                                CGPA: {profile.id}
                            </Text>

                    </View>

                        
                </View>
            </View>

        </View>
        </View>
        </View>


    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#bce6eb",
    },
    header: {
      flex: 1.5,
      backgroundColor: "#bce6eb",
      justifyContent: "space-evenly",
    },
    editIconContainer: {
      alignSelf: "flex-end",
      paddingRight: 10,
    },
    profileContainer: {
      flexDirection: "row",
    },
    avatarIcon: {
      backgroundColor: '#232323',
    },
    upperContainer: {
      paddingLeft: 15,
    },
    headingContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    headingText: {
      fontSize: 23,
      fontWeight: "bold",
      paddingRight: 100,
    },
  
    mobileIcon: {
      paddingLeft: 4,
      paddingTop: 10,
    },
    withIconHeading: {
      flexDirection: "row",
      alignItems: "center",
    },
    subheadingText: {
      color: "#323232",
      fontSize: 13,
      fontStyle: "italic",
    },
    footer: {
      flex: 4,
      backgroundColor: "#fff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingTop: 10,
      paddingHorizontal: 30,
    },
  });


  export default OrginzationView;