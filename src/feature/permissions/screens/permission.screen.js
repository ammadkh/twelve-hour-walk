import React, { useContext } from "react";
import styled from "styled-components/native";

import { Layout } from "../../../components/UI/layout.component";
import { NumberIcon } from "../../../components/UI/number-icon.component";
import { Spacer } from "../../../components/UI/spacer.component";
import { Text } from "../../../components/UI/typography.component";
import { LocationManagerContext } from "../../../services/location/location.context";

const TextCenter = styled(Text)`
  text-align: center;
  font-size: 17px;
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const PermissionScreen = ({ navigation }) => {
  const { getPermissions } = useContext(LocationManagerContext);
  return (
    <Layout
      navigation={navigation}
      closeIcon
      img
      heading="Setup"
      btnTitle="Continue"
      onPress={async () => {
        await getPermissions();
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
