import React, { useContext, useState } from "react";

import { Text } from "../../../../components/UI/typography.component";
import { InputComponent } from "../../../../components/UI/input.component";
import { ButtonComponent } from "../../../../components/UI/button.component";
import { AuthHeader } from "../../components/auth-header.component";
import { AuthWrapper } from "../../components/auth-wrapper.component";
import { AuthFooter } from "../../components/auth-footer.component";
import { AuthenticationContext } from "../../../../services/authentication/authentication.context";

export const ResetPasswordScreen = ({ navigation }) => {
  const { onResetPassword, isLoading, error, setError } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState("");
  return (
    <AuthWrapper>
      <AuthHeader title="Reset Password"></AuthHeader>
      <InputComponent
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <ButtonComponent
        isLoading={isLoading}
        onPress={() => onResetPassword(email)}
      >
        Send Email
      </ButtonComponent>
      {error && <Text variant="error">*{error}</Text>}
      <AuthFooter
        onPress={() => {
          navigation.goBack();
          setError(null);
        }}
      >
        Cancel Change Password
      </AuthFooter>
    </AuthWrapper>
  );
};
