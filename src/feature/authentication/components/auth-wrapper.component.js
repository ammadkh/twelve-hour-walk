import React from "react";
import styled from "styled-components/native";
import { SafeAreaComponent } from "../../../components/UI/safe-area.component";

const KeyboardAvoidComponent = styled.KeyboardAvoidingView`
  align-items: center;
`;

export const AuthWrapper = ({ children }) => {
  return (
    <SafeAreaComponent>
      <KeyboardAvoidComponent
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {children}
      </KeyboardAvoidComponent>
    </SafeAreaComponent>
  );
};
