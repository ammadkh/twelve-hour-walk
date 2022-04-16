import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationNavigation } from "./authentication.navigation";
import DrawerNavigation from "./drawer/drawer.navigation";

export const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <AuthenticationNavigation /> */}
      <DrawerNavigation />
    </NavigationContainer>
  );
};
