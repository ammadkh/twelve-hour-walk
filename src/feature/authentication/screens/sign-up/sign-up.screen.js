import React, { useContext, useState } from "react";
import styled from "styled-components/native";

import { Text } from "../../../../components/UI/typography.component";
import { InputComponent } from "../../../../components/UI/input.component";
import { ButtonComponent } from "../../../../components/UI/button.component";
import { CheckBoxComponent } from "../../../../components/UI/checkbox.component";
import { AuthHeader } from "../../components/auth-header.component";
import { AuthWrapper } from "../../components/auth-wrapper.component";
import { AuthFooter } from "../../components/auth-footer.component";
import { AuthenticationContext } from "../../../../services/authentication/authentication.context";

const NameWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${(props) => `${props.theme.inputSize.default.width + 9}px`};
`;

export const SignUpScreen = ({ navigation }) => {
  const { onRegister, error, isLoading, setError } = useContext(
    AuthenticationContext
  );
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const onSignUpHandler = () => {
    onRegister(email, password, terms);
  };

  return (
    <AuthWrapper>
      <AuthHeader title="Create Account" />
      <NameWrapper>
        <InputComponent
          placeholder="First Name"
          small
          value={firstName}
          onChangeText={(firstname) => setFirstName(firstname)}
        />
        <InputComponent
          placeholder="Last Name"
          small
          value={lastName}
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </NameWrapper>
      <InputComponent
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <InputComponent
        placeholder="Password"
        icon="eye-outline"
        secureTextEntry={!showPassword}
        onPress={() => setShowPassword((prev) => !prev)}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <CheckBoxComponent terms={terms} onPress={() => setTerms(!terms)}>
        I agree to terms & conditions.
      </CheckBoxComponent>
      <ButtonComponent onPress={onSignUpHandler} isLoading={isLoading}>
        Sign Up
      </ButtonComponent>
      {error && <Text variant="error">*{error}</Text>}
      <AuthFooter
        onPress={() => {
          navigation.navigate("login");
          setError(null);
        }}
      >
        Already have an account?
      </AuthFooter>
    </AuthWrapper>
  );
};
