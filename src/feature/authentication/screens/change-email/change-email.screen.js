import React from "react";
import { InputComponent } from "../../../../components/UI/input.component";
import { ButtonComponent } from "../../../../components/UI/button.component";
import { AuthHeader } from "../../components/auth-header.component";
import { AuthWrapper } from "../../components/auth-wrapper.component";
import { AuthFooter } from "../../components/auth-footer.component";

export const ChangeEmailScreen = () => {
  return (
    <AuthWrapper>
      <AuthHeader title="Change Email"></AuthHeader>
      <InputComponent placeholder="Current Email" />
      <InputComponent placeholder="New Email" />
      <ButtonComponent>Set New Email</ButtonComponent>
      <AuthFooter>Cancel Change Email</AuthFooter>
    </AuthWrapper>
  );
};
