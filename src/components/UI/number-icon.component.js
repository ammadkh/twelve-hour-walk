import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Circle = styled.View`
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    border-color: ${(props) => props.theme.colors.brand.primary}
    border-width: 2px;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

const Number = styled.Text`
  text-align: center;
  font-size: 17px;
  text-align-vertical: center;
  color: ${(props) => props.theme.colors.brand.primary};
`;

export const NumberIcon = ({ children }) => {
  return (
    <Circle>
      <Number>{children}</Number>
    </Circle>
  );
};
