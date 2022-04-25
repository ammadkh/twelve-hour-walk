import React, { useState, useContext } from "react";

import { AuthenticationContext } from "../../../../services/authentication/authentication.context";
import { InputComponent } from "../../../../components/UI/input.component";
import { ButtonComponent } from "../../../../components/UI/button.component";
import { Text } from "../../../../components/UI/typography.component";
import { AuthHeader } from "../../components/auth-header.component";
import { AuthWrapper } from "../../components/auth-wrapper.component";
import { AuthFooter } from "../../components/auth-footer.component";

export const LoginScreen = ({ navigation }) => {
  const { onLogin, error, isLoading, setError } = useContext(
    AuthenticationContext
  );
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <AuthWrapper>
      <AuthHeader
        title="Sign In"
        subtitle="Ready to start your Walk?"
      ></AuthHeader>
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
      <ButtonComponent
        onPress={() => onLogin(email, password)}
        isLoading={isLoading}
      >
        Login
      </ButtonComponent>
      {error && <Text variant="error">*{error}</Text>}
      <AuthFooter
        onPress={() => {
          navigation.navigate("resetPassword");
          setError(null);
        }}
      >
        Forgot your password?
      </AuthFooter>
      <AuthFooter
        onPress={() => {
          navigation.navigate("signup");
          setError(null);
        }}
      >
        Create Your Account
      </AuthFooter>
    </AuthWrapper>
  );
};
