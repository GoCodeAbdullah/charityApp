import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./app/navigation/MainNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}