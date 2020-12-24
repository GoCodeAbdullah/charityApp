import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

// import orginizations

import OrginzationsList from "../organizations/OrginzationsList";
import OrginzationView from "../organizations/OrginzationView";

// import login and sign up

import Login from "../pages/Login";
import Signup from "../pages/Signup";

// Componenets

import Header from "../components/Header"




const Stack = createStackNavigator();

const OrginizationStack = () =>{
    return(
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login " component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="header" component={Header} />
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
        headerTitle: true,
        headerTransparent: false,
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