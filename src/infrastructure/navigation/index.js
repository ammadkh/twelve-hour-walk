import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationNavigation } from "./authentication.navigation";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthenticationNavigation />
    </NavigationContainer>
  );
};
