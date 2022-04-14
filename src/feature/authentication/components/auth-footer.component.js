import React from "react";
import { Pressable } from "react-native";
import { Spacer } from "../../../components/UI/spacer.component";
import { Text } from "../../../components/UI/typography.component";

export const AuthFooter = (props) => {
  return (
    <Spacer position="top" size="xlarge">
      <Pressable onPress={props.onPress}>
        <Text variant="caption">{props.children}</Text>
      </Pressable>
    </Spacer>
  );
};
