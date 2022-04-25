import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationNavigation } from "./authentication.navigation";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { DrawerNavigation } from "../navigation/drawer/drawer.navigation";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {!isAuthenticated ? <AuthenticationNavigation /> : <DrawerNavigation />}
    </NavigationContainer>
  );
};
