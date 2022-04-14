import React from "react";
import styled from "styled-components/native";

import { InputComponent } from "../../../../components/UI/input.component";
import { ButtonComponent } from "../../../../components/UI/button.component";
import { AuthHeader } from "../../components/auth-header.component";
import { AuthWrapper } from "../../components/auth-wrapper.component";
import { AuthFooter } from "../../components/auth-footer.component";

const Wrapper = styled.View``;

export const LoginScreen = ({ navigation }) => {
  return (
    <AuthWrapper>
      <AuthHeader
        title="Sign In"
        subtitle="Ready to start your Walk?"
      ></AuthHeader>
      <InputComponent placeholder="Email" />
      <InputComponent placeholder="Password" icon="eye-outline" />
      <ButtonComponent>Login</ButtonComponent>
      <AuthFooter onPress={() => navigation.navigate("resetPassword")}>
        Forgot your password?
      </AuthFooter>
      <AuthFooter onPress={() => navigation.navigate("signup")}>
        Create Your Account
      </AuthFooter>
    </AuthWrapper>
  );
};
