import { auto } from "async";
import React from "react";
import { FlatList, StyleSheet, Text, View, Image , ScrollView } from "react-native";
import { Avatar, Card } from "react-native-paper";
import Header from "../components/Header";




const orgnization =[
    {
        id: 1,
        name: "Shoukat Khanam",
        about: "To get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library.",
        contact:"031020220",
        bankAccount: "1232134",
        icon: require("../assets/images/sk.png"),
        pic: require("../assets/images/sk.jpg")

    },
    {
        id: 2,
        name: "Edhi",
        about: "To get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library.",
        contact:"031020220",
        bankAccount: "1232134",
        icon:require("../assets/images/edhi.png"),
        pic: require("../assets/images/edhi.jpg"),
    },
    {
        id: 3,
        name: "Chippa",
        about: "To get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library.",
        contact:"031020220",
        bankAccount: "1232134",
        icon:require("../assets/images/chippa.png"),
        pic: require("../assets/images/chippa.jpg"),
    },
];

const OrginzationsList= ({navigation})=>{
    return(
        <View style={styles.container}>
            <Header />
            

            <Image
            style={styles.imageView}
            source={require('../assets/images/logo.png')}
            />
            
            <View style={styles.header}>
                <Text style={styles.headingText}>Orginizations that need your Support</Text>
            </View>
            
        <View style={styles.footer}>
            <FlatList
                style={styles.Flatlist}
                data={orgnization}
                keyExtractor={(orgnization) => orgnization.id.toString()}
                renderItem={({ item }) => (
                <Card
                    style={styles.cardObject}
                    onPress={() =>
                    navigation.navigate("OrganizationView", {
                        profile: item,
                    })
                    }
                >
                    <Card.Cover
                    source={item.pic}
                    />

                    
                    <Card.Title
                        title={item.name} 
                        subtitle={item.about}   
                        left={() => <Avatar.Image backgroundColor="#ffffff" size={50} source={item.icon} />}                
                    />
                </Card>
                )}
            />
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F9F9F9",
      alignItems: "center",
      height: "100%"
    },
    imageView:{
        width: 100,
        height: 100,
        marginTop: 30

    },
    header: {
      flex: 1,
      paddingLeft: 20,
      backgroundColor: "#EBFFCB",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 30,
      width: '95%',
      borderRadius: 10
   },
    headingText: {
      fontSize: 27,
      fontWeight: "bold",
      paddingRight: 10,
      textAlign: "center",
      
    },
    footer: {
      flex: 5,
      backgroundColor: "#F9F9F9",
      width: "95%"
    },
    icon: {
      paddingRight: 10,
    },
    cardObject:{
        marginBottom: 30,
        shadowColor:"#333333"
    },
  });

  export default OrginzationsList;