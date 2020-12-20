import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

// import orginizations

import OrginzationsList from "../organizations/OrginzationsList";
import OrginzationView from "../organizations/OrginzationView";




const Stack = createStackNavigator();

const OrginizationStack = () =>{
    return(
    <Stack.Navigator
      initialRouteName="Charity App"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Orginzations" component={OrginzationsList} />
      <Stack.Screen name="OrganizationView" component={OrginzationView} />
    </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: false,
        headerTransparent: true,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: "#bce6eb",
        },
      }}
    >
      <Drawer.Screen name="Orginzation" component={OrginizationStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;