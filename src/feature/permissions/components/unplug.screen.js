import React from "react";
import { Text } from "../../../components/UI/typography.component";
import { Layout } from "../../../components/UI/layout.component";

export const UnplugScreen = ({ navigation }) => {
  return (
    <Layout
      navigation={navigation}
      closeIcon
      heading="Unplug"
      btnTitle="Activate Airplane Mode"
      icon="power-plug-outline"
      iconType="material-community"
    >
      <Text style={{ textAlign: "center", color: "white" }}>
        The morning of your 12-Hour Walk, turn your phone on airplane mode. No
        headphones, no podcasts, no music, no email, no texts, no social media
        for the entire twelve hours
      </Text>
    </Layout>
  );
};
