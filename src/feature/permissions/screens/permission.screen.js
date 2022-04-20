import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Layout } from "../../../components/UI/layout.component";
import { NumberIcon } from "../../../components/UI/number-icon.component";
import { Spacer } from "../../../components/UI/spacer.component";
import { Text } from "../../../components/UI/typography.component";

const TextCenter = styled(Text)`
  text-align: center;
  font-size: 17px;
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const PermissionScreen = ({ navigation }) => {
  return (
    <Layout
      navigation={navigation}
      closeIcon
      img
      heading="Setup"
      btnTitle="Continue"
      onPress={() => {
        navigation.goBack();
        navigation.navigate("startup-tabs");
      }}
    >
      <NumberIcon>1</NumberIcon>
      <TextCenter>Allow the app to track your GPS location.</TextCenter>
      <Spacer size="large" position="top">
        <NumberIcon>2</NumberIcon>
        <TextCenter>
          Allow notifications to be alerted when you’ve completed your walk.
        </TextCenter>
      </Spacer>
      <Spacer size="large" position="top">
        <NumberIcon>3</NumberIcon>
        <TextCenter>
          Allow the app to track user data so we can verify walk completion.
        </TextCenter>
      </Spacer>
    </Layout>
  );
};
