import React, { useState } from "react";
import { Icon, CheckBox } from "@rneui/themed";
import styled from "styled-components/native";

import {
  defaultFontSizes,
  fontWeights,
} from "../../infrastructure/theme/fonts";
import { colors } from "../../infrastructure/theme/colors";
import { iconSizes } from "../../infrastructure/theme/sizes";
import { defaultSpaces } from "../../infrastructure/theme/spacing";

const CheckboxContainer = styled(CheckBox).attrs({
  containerStyle: { backgroundColor: "transparent" },
  textStyle: {
    fontSize: defaultFontSizes.caption,
    fontWeight: fontWeights.regular.toString(),
    color: colors.text.primary,
  },
})``;

const IconContainer = styled(Icon).attrs({
  iconStyle: { marginRight: defaultSpaces.xsmall },
})``;

export const CheckBoxComponent = (props) => {
  const [terms, setTerms] = useState(null);
  return (
    <CheckboxContainer
      center
      title={props.children}
      checkedIcon={
        <IconContainer
          name="check"
          type="simple-line-icon"
          color={colors.icon.success}
          size={iconSizes.small}
        />
      }
      uncheckedIcon={
        <IconContainer
          name="check"
          type="simple-line-icon"
          color={colors.icon.primary}
          size={iconSizes.small}
        />
      }
      checked={terms}
      onPress={() => setTerms(!terms)}
    />
  );
};
