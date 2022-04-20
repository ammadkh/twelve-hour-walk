import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "./custom-content.navigation";
import { RecordWalkNavigation } from "../record-walk/record-walk.navigation";
import { DrawerScreenOption } from "./drawer.styles";

const Drawer = createDrawerNavigator();
export default DrawerNavigation = () => {
  return (
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
  );
};

const Faq = () => {
  return <></>;
};
