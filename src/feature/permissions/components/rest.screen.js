import React from "react";
import { Text } from "../../../components/UI/typography.component";
import { Layout } from "../../../components/UI/layout.component";

export const RestScreen = ({ navigation }) => {
  return (
    <Layout
      navigation={navigation}
      closeIcon
      heading="Rest"
      icon="control-pause"
      iconType="simple-line-icon"
    >
      <Text style={{ textAlign: "center", color: "white" }}>
        The 12-Hour Walk isn’t a race. Take as many breaks as you need. It
        doesn’t matter if you walk one mile or fifty; as long as you maintain
        your solitude and keep moving when you can, you’re winning.
      </Text>
    </Layout>
  );
};
