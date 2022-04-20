import React from "react";
import { Tab, TabView } from "@rneui/themed";
import styled from "styled-components/native";
import { RecordScreen } from "../components/record.screen";
import { UnplugScreen } from "../components/unplug.screen";
import { RestScreen } from "../components/rest.screen";
import { ReflectScreen } from "../components/reflect.screen";

const TabViewItem = styled(TabView.Item)`
  flex: 1;
`;

const TabWrapper = styled.View`
  align-items: center;
`;

const TabContainer = styled(Tab).attrs({
  containerStyle: {
    position: "absolute",
    bottom: 30,
    width: "40%",
    height: 3,
  },
  variant: "default",
})``;

const TabItem = styled(Tab.Item).attrs({
  variant: "default",
  containerStyle: { marginHorizontal: 5 },
  buttonStyle: (active) => ({
    backgroundColor: active ? "white" : "grey",
  }),
})``;

export const TabsScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabViewItem>
          <RecordScreen navigation={navigation} />
        </TabViewItem>
        <TabViewItem>
          <UnplugScreen navigation={navigation} />
        </TabViewItem>
        <TabViewItem>
          <RestScreen navigation={navigation} />
        </TabViewItem>
        <TabViewItem>
          <ReflectScreen navigation={navigation} />
        </TabViewItem>
      </TabView>
      <TabWrapper>
        <TabContainer
          value={index}
          onChange={(e) => setIndex(e)}
          disableIndicator
        >
          <TabItem />
          <TabItem />
          <TabItem />
          <TabItem />
        </TabContainer>
      </TabWrapper>
    </>
  );
};
