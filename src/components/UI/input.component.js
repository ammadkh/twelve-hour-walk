import React from "react";
import styled from "styled-components/native";
import { Input, Icon } from "@rneui/themed";
import { colors } from "../../infrastructure/theme/colors";
import { inputSize } from "../../infrastructure/theme/sizes";

const InputWrapper = styled(Input).attrs((props) => ({
  inputContainerStyle: {
    padding: 12,
    borderBottomWidth: 0,
    height: "100%",
    alignItems: "center",
  },
  inputStyle: {
    fontSize: 15,
    color: colors.text.primary,
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 50,
    height: props.small ? inputSize.small.height : inputSize.default.height,
    backgroundColor: colors.ui.primary,
    borderColor: colors.ui.secondary,
    margin: 5,
    marginBottom: 16,
    width: props.small ? inputSize.small.width : inputSize.default.width,
  },
}))``;

export const InputComponent = (props) => {
  return (
    <InputWrapper
      {...props}
      rightIcon={
        props.icon ? (
          <Icon
            type="ionicon"
            name={props.icon}
            size={20}
            color={colors.text.primary}
            onPress={props.onPress}
          />
        ) : null
      }
    />
  );
};
