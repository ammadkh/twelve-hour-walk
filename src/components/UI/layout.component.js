import React from "react";
import { Image } from "react-native";
import { Icon } from "@rneui/themed";
import styled from "styled-components/native";
import { iconSizes } from "../../infrastructure/theme/sizes";
import { Text } from "./typography.component";
import { colors } from "../../infrastructure/theme/colors";
import { SafeAreaComponent } from "./safe-area.component";
import { Spacer } from "./spacer.component";
import { ButtonComponent } from "./button.component";

export const CloseIcon = styled(Icon).attrs({
  name: "close",
  size: iconSizes.xsmall,
  color: colors.icon.primary,
  type: "material-community",
})``;

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  padding-top: 30px;
`;

const CloseWrapper = styled.View`
  align-self: flex-end;
`;

const ContentWrapper = styled.View`
  width: 85%;
  align-items: center;
`;

const MainIcon = styled(Icon).attrs({
  size: 50,
  color: colors.brand.primary,
})``;

export const Layout = (props) => {
  return (
    <SafeAreaComponent opacity>
      <Container>
        <CloseWrapper>
          {props.closeIcon && (
            <CloseIcon onPress={() => props.navigation.goBack()} />
          )}
        </CloseWrapper>
        <ContentWrapper>
          {props.icon && (
            <MainIcon
              name={props.icon}
              type={props.iconType ? props.iconType : "ionicon"}
            ></MainIcon>
          )}
          {props.img && (
            <Image source={require("../../../assets/vector.png")} />
          )}
          <Spacer position="top" size="xlarge">
            <Text variant="heading">{props.heading}</Text>
          </Spacer>
          <Spacer position="top" size="large">
            {props.children}
          </Spacer>
        </ContentWrapper>

        <Spacer position="bottom" size="large">
          {props.secondaryBtnTitle && (
            <ButtonComponent isGradient={false} onPress={props.onPress}>
              {props.secondaryBtnTitle}
            </ButtonComponent>
          )}
          {props.btnTitle && (
            <ButtonComponent onPress={props.onPress}>
              {props.btnTitle}
            </ButtonComponent>
          )}
          {!props.btnTitle && <Spacer position="top" size="xxlarge"></Spacer>}
        </Spacer>
      </Container>
    </SafeAreaComponent>
  );
};
