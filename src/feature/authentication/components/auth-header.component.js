import React from "react";
import { Image } from "react-native";
import { Spacer } from "../../../components/UI/spacer.component";
import { Text } from "../../../components/UI/typography.component";

export const AuthHeader = ({ title, subtitle }) => {
  return (
    <>
      <Image source={require("../../../../assets/vector.png")} />
      <Spacer position="top" size="xlarge">
        <Text variant="heading">{title}</Text>
      </Spacer>
      {subtitle && (
        <Spacer position="top" size="large">
          <Text variant="label">{subtitle}</Text>
        </Spacer>
      )}
      <Spacer position="bottom" size="xlarge" />
    </>
  );
};
