import React from "react";
import { InputComponent } from "../../../../components/UI/input.component";
import { ButtonComponent } from "../../../../components/UI/button.component";
import { AuthHeader } from "../../components/auth-header.component";
import { AuthWrapper } from "../../components/auth-wrapper.component";
import { AuthFooter } from "../../components/auth-footer.component";

export const ResetPasswordScreen = ({ navigation }) => {
  return (
    <AuthWrapper>
      <AuthHeader title="Reset Password"></AuthHeader>
      <InputComponent placeholder="Email" />
      <InputComponent placeholder="New Password" icon="eye-outline" />
      <InputComponent placeholder="Confirm New Password" icon="eye-outline" />
      <ButtonComponent>Set New Password</ButtonComponent>
      <AuthFooter onPress={() => navigation.goBack()}>
        Cancel Change Password
      </AuthFooter>
    </AuthWrapper>
  );
};
