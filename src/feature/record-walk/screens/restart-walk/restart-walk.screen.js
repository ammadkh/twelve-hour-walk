import React from "react";
import { NavigationContext } from "@react-navigation/native";
import { Layout } from "../../../../components/UI/layout.component";
import { SafeAreaComponent } from "../../../../components/UI/safe-area.component";
import { LocationManagerContext } from "../../../../services/location/location.context";

export const RestartWalkScreen = () => {
  const navigation = React.useContext(NavigationContext);
  const { stopLocationUpdate } = React.useContext(LocationManagerContext);

  return (
    <SafeAreaComponent opacity>
      <Layout
        icon="arrow-back-outline"
        heading="Are you sure you want to restart your Walk?"
        btnTitle="Return to Walk"
        secondaryBtnTitle="Restart My Walk"
        onPressSecondaryBtn={() => {
          stopLocationUpdate();
          navigation.goBack();
        }}
        onPress={() => navigation.goBack()}
      ></Layout>
    </SafeAreaComponent>
  );
};
