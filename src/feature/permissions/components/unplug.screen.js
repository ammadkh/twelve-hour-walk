import React from "react";
import { Platform } from "react-native";
import * as Linking from "expo-linking";
import Constants from "expo-constants";
import * as IntentLauncher from "expo-intent-launcher";

import { Text } from "../../../components/UI/typography.component";
import { Layout } from "../../../components/UI/layout.component";

export const UnplugScreen = () => {
  const pkg = Constants.manifest.releaseChannel
    ? Constants.manifest.android.package
    : "host.exp.exponent";
  return (
    <Layout
      closeIcon
      heading="Unplug"
      btnTitle="Activate Airplane Mode"
      icon="power-plug-outline"
      iconType="material-community"
      onPress={() => {
        if (Platform.OS === "ios") {
          Linking.openURL("app-settings:");
        } else {
          IntentLauncher.startActivityAsync(
            IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
            { data: "package:" + pkg }
          );
        }
      }}
    >
      <Text style={{ textAlign: "center", color: "white" }}>
        The morning of your 12-Hour Walk, turn your phone on airplane mode. No
        headphones, no podcasts, no music, no email, no texts, no social media
        for the entire twelve hours
      </Text>
    </Layout>
  );
};
