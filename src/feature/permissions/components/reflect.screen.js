import React from "react";
import { NavigationContext } from "@react-navigation/native";
import { Text } from "../../../components/UI/typography.component";
import { Layout } from "../../../components/UI/layout.component";
import { LocationManagerContext } from "../../../services/location/location.context";
import { StopwatchContext } from "../../../services/stopwatch/stopwatch.context";

export const ReflectScreen = () => {
  const { startWalk } = React.useContext(LocationManagerContext);
  const navigation = React.useContext(NavigationContext);

  return (
    <Layout
      closeIcon
      heading="Reflect"
      icon="videocam-outline"
      btnTitle="Let's go!"
      onPress={() => {
        startWalk();
        navigation.goBack();
      }}
    >
      <Text style={{ textAlign: "center", color: "white" }}>
        The 12-Hour Walk isn’t a race. Take as many breaks as you need. It
        doesn’t matter if you walk one mile or fifty; as long as you maintain
        your solitude and keep moving when you can, you’re winning.
      </Text>
    </Layout>
  );
};
