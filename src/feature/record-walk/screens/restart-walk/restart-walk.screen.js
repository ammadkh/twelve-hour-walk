import React from "react";
import { NavigationContext } from "@react-navigation/native";
import { Layout } from "../../../../components/UI/layout.component";
import { SafeAreaComponent } from "../../../../components/UI/safe-area.component";

export const RestartWalkScreen = () => {
  const navigation = React.useContext(NavigationContext);

  return (
    <SafeAreaComponent opacity>
      <Layout
        icon="arrow-back-outline"
        heading="Are you sure you want to restart your Walk?"
        btnTitle="Return to Walk"
        secondaryBtnTitle="Restart My Walk"
        onPress={() => navigation.goBack()}
      ></Layout>
    </SafeAreaComponent>
  );
};
