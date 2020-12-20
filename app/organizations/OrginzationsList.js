import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Avatar, Card } from "react-native-paper";


const orgnization =[
    {
        id: 1,
        name: "Shoukat Khanam",
        about: "To get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library.",
        contact:"031020220",
        bankAccount: "1232134"
    },
    {
        id: 2,
        name: "Edhi",
        about: "To get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library.",
        contact:"031020220",
        bankAccount: "1232134"
    },
    {
        id: 3,
        name: "Chippa",
        about: "To get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library.",
        contact:"031020220",
        bankAccount: "1232134"
    },
];

const OrginzationsList= ({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headingText}>Orginizations That Need your Support</Text>
            </View>
            <View style={styles.footer}>
            <FlatList
                data={orgnization}
                keyExtractor={(orgnization) => orgnization.id.toString()}
                renderItem={({ item }) => (
                <Card
                    onPress={() =>
                    navigation.navigate("OrganizationView", {
                        profile: item,
                    })
                    }
                >
                    
                <Card.Title
                    title={item.name}
                    left={(props) => (
                    <Avatar.Text
                        {...props}
                        label="S"
                        backgroundColor="#0298ff"
                    />
                    )}
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
      backgroundColor: "#bce6eb",
    },
    header: {
      flex: 1,
      paddingLeft: 20,
      backgroundColor: "#bce6eb",
      justifyContent: "space-evenly",
    },
    headingText: {
      fontSize: 35,
      fontWeight: "bold",
      paddingRight: 10,
    },
    footer: {
      flex: 5,
      backgroundColor: "#fff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingTop: 10,
      paddingHorizontal: 10,
    },
    icon: {
      paddingRight: 10,
    },
  });

  export default OrginzationsList;