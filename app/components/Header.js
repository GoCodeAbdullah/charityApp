import React from 'react';
import { StyleSheet, Image, View, StatusBar, TouchableOpacity} from 'react-native';
import { Avatar} from "react-native-paper";


export default function Header({navigation}){

    return(
    <>
    <StatusBar backgroundColor="#EFEDED"  />
    <View style={styles.container}>
        <Image
        style={styles.Image}
        source={require("../assets/images/navbar.webp")}
        />

        <View style={styles.subContainer}>
            <Image
            style={styles.ImageSub}
            source={require("../assets/images/search.webp")}
            />
            <Image
            style={styles.ImageSub}
            source={require("../assets/images/bell.png")}
            />

            <TouchableOpacity  
            onPress={()=>navigation.navigate("signup")}                       
            >
                <Avatar.Text
                    size={35}
                    label="C"
                    backgroundColor="#0298ff"
                />
            </TouchableOpacity>

        </View>
    </View>
    </>
    );

}


const styles = StyleSheet.create({
    container:{

        backgroundColor: "#EFEDED",
        width: "100%",
        height: 75,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        
    },
    Image:{
        height: 35,
        width: 35
    },
    subContainer:{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: "30%"

    },
    ImageSub:{
        height: 25,
        width: 20,
        paddingHorizontal: 10
    }

});