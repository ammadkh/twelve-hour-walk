import React from "react";
import { NavigationContext } from "@react-navigation/native";

import { Layout } from "../../../components/UI/layout.component";
import { Spacer } from "../../../components/UI/spacer.component";
import { Text } from "../../../components/UI/typography.component";

export const RecordScreen = () => {
  const navigation = React.useContext(NavigationContext);

  return (
    <Layout
      closeIcon
      heading="Record"
      btnTitle="Go to Camera"
      onPress={() => navigation.navigate("video-screen")}
      icon="videocam-outline"
    >
      <Text style={{ textAlign: "center", color: "white" }}>
        Before you set out, take a short selfie video and verbalize the limiting
        beliefs that have been holding you back.
      </Text>
      <Spacer position="top" size="large">
        <Text style={{ textAlign: "center", color: "white" }}>
          Set an intention—how you hope this walk will help you improve your
          mindset and live your best life.
        </Text>
      </Spacer>
      <Spacer position="top" size="large">
        <Text style={{ textAlign: "center", color: "white" }}>
          Keep your phone with you for safety, but don’t use it except to record
          a quick video or voice memo to reflect on later.
        </Text>
      </Spacer>
    </Layout>
  );
};
