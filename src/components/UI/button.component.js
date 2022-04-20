import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

import { Text } from "./typography.component";

const ButtonContainer = styled.TouchableOpacity`
  width: ${(props) => `${props.theme.inputSize.default.width}px`};
  height: ${(props) => `${props.theme.inputSize.default.height}px`};
  border-radius: 50px;
  overflow: hidden;
  margin-horizontal: 16px;
  margin-vertical: 10px;
  border-width: ${(props) => (props.isGradient ? "0" : "1")}px;
  border-color: ${(props) => (props.isGradient ? "transparent" : "white")};
  justify-content: center;
  align-items: center;
`;

const LinearGradientWrapper = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonComponent = ({ onPress, children, isGradient = true }) => {
  return (
    <ButtonContainer onPress={onPress} isGradient={isGradient}>
      {isGradient && (
        <LinearGradientWrapper
          colors={["#E36E31", "#D9373B"]}
          end={{ x: 1, y: 0 }}
          start={{ x: 0.1, y: 0.1 }}
          locations={[0, 1]}
        >
          <Text variant="btnLabel">{children}</Text>
        </LinearGradientWrapper>
      )}
      {!isGradient && (
        <Text variant="btnLabel" style={{ color: "white" }}>
          {children}
        </Text>
      )}
    </ButtonContainer>
  );
};
