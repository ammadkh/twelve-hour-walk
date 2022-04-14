import React from "react";
import styled from "styled-components/native";

import { InputComponent } from "../../../../components/UI/input.component";
import { ButtonComponent } from "../../../../components/UI/button.component";
import { CheckBoxComponent } from "../../../../components/UI/checkbox.component";
import { AuthHeader } from "../../components/auth-header.component";
import { AuthWrapper } from "../../components/auth-wrapper.component";
import { AuthFooter } from "../../components/auth-footer.component";

const NameWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${(props) => `${props.theme.inputSize.default.width}px`};
`;

export const SignUpScreen = ({ navigation }) => {
  return (
    <AuthWrapper>
      <AuthHeader title="Create Account" />
      <NameWrapper>
        <InputComponent placeholder="First Name" small />
        <InputComponent placeholder="Last Name" small />
      </NameWrapper>
      <InputComponent placeholder="Email" />
      <InputComponent placeholder="Password" icon="eye-outline" />
      <CheckBoxComponent>I agree to terms & conditions.</CheckBoxComponent>
      <ButtonComponent>Sign Up</ButtonComponent>
      <AuthFooter onPress={() => navigation.navigate("login")}>
        Already have an account?
      </AuthFooter>
    </AuthWrapper>
  );
};
