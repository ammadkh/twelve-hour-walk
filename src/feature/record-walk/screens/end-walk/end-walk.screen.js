import React from "react";
import { View, Text } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import { Layout } from "../../../../components/UI/layout.component";
import { SafeAreaComponent } from "../../../../components/UI/safe-area.component";

export const EndWalkScreen = () => {
  const navigation = React.useContext(NavigationContext);

  return (
    <SafeAreaComponent opacity>
      <Layout
        icon="close"
        heading="Are you sure you want to end your Walk?"
        btnTitle="Return to Walk"
        secondaryBtnTitle="End My Walk"
        onPress={() => navigation.goBack()}
      ></Layout>
    </SafeAreaComponent>
  );
};
