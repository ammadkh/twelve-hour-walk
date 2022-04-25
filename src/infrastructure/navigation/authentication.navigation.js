import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../../feature/authentication/screens/login/login.screen";
import { SignUpScreen } from "../../feature/authentication/screens/sign-up/sign-up.screen";
import { ResetPasswordScreen } from "../../feature/authentication/screens/reset-password/reset-password.screen";
import { SelectDateScreen } from "../../feature/authentication/screens/select-date/select-date.screen";

const AuthenticationStack = createNativeStackNavigator();
export const AuthenticationNavigation = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen
        name="login"
        component={LoginScreen}
      ></AuthenticationStack.Screen>
      <AuthenticationStack.Screen
        name="signup"
        component={SignUpScreen}
      ></AuthenticationStack.Screen>
      <AuthenticationStack.Screen
        name="resetPassword"
        component={ResetPasswordScreen}
      ></AuthenticationStack.Screen>
      <AuthenticationStack.Screen
        name="select-date"
        component={SelectDateScreen}
      ></AuthenticationStack.Screen>
    </AuthenticationStack.Navigator>
  );
};
