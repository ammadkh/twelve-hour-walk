import { Image } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Icon, ListItem } from "@rneui/themed";
import styled from "styled-components/native";
import { colors } from "../../theme/colors";
import { defaultFontSizes, fontWeights } from "../../theme/fonts";
import { iconSizes } from "../../theme/sizes";

export const DrawerHeader = styled.View`
  padding: ${(props) => props.theme.defaultSpaces.medium}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.defaultSpaces.large}px;
`;

export const ImgWrapper = styled(Image).attrs({
  source: require("../../../../assets/color-man.png"),
})`
  height: ${(props) => props.theme.iconSizes.small}px;
  width: ${(props) => props.theme.iconSizes.small}px;
`;

export const Accordion = styled(ListItem.Accordion).attrs({
  containerStyle: {
    backgroundColor: "transparent",
    marginHorizontal: 12,
    padding: 8,
    paddingBottom: 12,
  },
  icon: {
    color: colors.icon.secondary,
    name: "keyboard-arrow-right",
  },
  expandIcon: {
    color: colors.icon.secondary,
    name: "keyboard-arrow-up",
  },
})``;

export const AccordionListItems = styled(ListItem).attrs({
  containerStyle: {
    backgroundColor: "transparent",
    marginHorizontal: 12,
    paddingHorizontal: 8,
  },
})``;

export const AccordionListItemTitle = styled(ListItem.Title)`
  color: ${(props) => props.theme.colors.icon.secondary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const LogoutItem = styled(DrawerItem).attrs({
  labelStyle: {
    color: colors.icon.secondary,
    fontSize: defaultFontSizes.h5,
    fontWeight: fontWeights.regular,
  },
})`
  border-bottom-width: 0.2px;
  border-bottom-color: ${(props) => props.theme.colors.icon.secondary};
`;

export const CloseIcon = styled(Icon).attrs({
  name: "close",
  size: iconSizes.xsmall,
  color: colors.icon.primary,
  type: "material-community",
})``;
