import React from "react";

import { LocationManagerProvider } from "../../../services/location/location.context";
import { StopwatchProvider } from "../../../services/stopwatch/stopwatch.context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "./custom-content.navigation";
import { RecordWalkNavigation } from "../record-walk/record-walk.navigation";
import { DrawerScreenOption } from "./drawer.styles";

const Drawer = createDrawerNavigator();
export const DrawerNavigation = () => {
  return (
    <StopwatchProvider>
      <LocationManagerProvider>
        <Drawer.Navigator
          useLegacyImplementation
          initialRouteName="Home"
          screenOptions={DrawerScreenOption}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="Map"
            component={RecordWalkNavigation}
            options={{ drawerItemStyle: { display: "none" } }}
          />
          <Drawer.Screen name="FAQs" component={Faq} />
        </Drawer.Navigator>
      </LocationManagerProvider>
    </StopwatchProvider>
  );
};

const Faq = () => {
  return <></>;
};
