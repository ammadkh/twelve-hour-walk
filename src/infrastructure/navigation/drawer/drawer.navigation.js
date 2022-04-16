import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MapScreen } from "../../../feature/map/screens/map.screen";
import { CustomDrawerContent } from "./custom-content.navigation";
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
        component={MapScreen}
        options={{ drawerItemStyle: { display: "none" } }}
      />
      <Drawer.Screen name="FAQs" component={Faq} />
    </Drawer.Navigator>
  );
};

const Faq = () => {
  return <></>;
};
