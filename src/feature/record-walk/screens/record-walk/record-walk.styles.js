import styled from "styled-components/native";
import { Icon } from "@rneui/themed";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  align-items: center;
  justify-content: center;
`;

export const DrawerIconContainer = styled.View`
  position: absolute;
  top: 60px;
  left: 20px;
  z-index: 100;
`;

export const MenuIcon = styled(Icon).attrs({
  name: "menu",
  size: 24,
  color: "white",
})``;
