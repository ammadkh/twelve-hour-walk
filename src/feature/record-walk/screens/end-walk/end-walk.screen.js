import React from "react";
import { View, Text } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import { Layout } from "../../../../components/UI/layout.component";
import { SafeAreaComponent } from "../../../../components/UI/safe-area.component";
import { LocationManagerContext } from "../../../../services/location/location.context";

export const EndWalkScreen = () => {
  const navigation = React.useContext(NavigationContext);
  const { stopLocationUpdate } = React.useContext(LocationManagerContext);

  return (
    <SafeAreaComponent opacity>
      <Layout
        icon="close"
        heading="Are you sure you want to end your Walk?"
        btnTitle="Return to Walk"
        secondaryBtnTitle="End My Walk"
        onPressSecondaryBtn={() => {
          stopLocationUpdate();
          navigation.goBack();
        }}
        onPress={() => navigation.goBack()}
      ></Layout>
    </SafeAreaComponent>
  );
};
