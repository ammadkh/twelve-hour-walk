import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecordWalkScreen } from "../../../feature/record-walk/screens/record-walk/record-walk.screen";
import { PermissionScreen } from "../../../feature/permissions/screens/permission.screen";
import { TabsScreen } from "../../../feature/permissions/screens/tabs.screen";
import { EndWalkScreen } from "../../../feature/record-walk/screens/end-walk/end-walk.screen";
import { RestartWalkScreen } from "../../../feature/record-walk/screens/restart-walk/restart-walk.screen";

const RecordWalkStack = createNativeStackNavigator();

const transparentScreenStyles = {
  presentation: "transparentModal",
  contentStyle: { backgroundColor: "rgba(0,0,0,0.75)" },
};

export const RecordWalkNavigation = () => {
  return (
    <RecordWalkStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RecordWalkStack.Screen
        name="record-walk"
        component={RecordWalkScreen}
      ></RecordWalkStack.Screen>
      <RecordWalkStack.Screen
        options={transparentScreenStyles}
        name="permissions"
        component={PermissionScreen}
      ></RecordWalkStack.Screen>
      <RecordWalkStack.Screen
        options={transparentScreenStyles}
        name="startup-tabs"
        component={TabsScreen}
      ></RecordWalkStack.Screen>
      <RecordWalkStack.Screen
        options={transparentScreenStyles}
        name="end-walk"
        component={EndWalkScreen}
      ></RecordWalkStack.Screen>
      <RecordWalkStack.Screen
        options={transparentScreenStyles}
        name="restart-walk"
        component={RestartWalkScreen}
      ></RecordWalkStack.Screen>
    </RecordWalkStack.Navigator>
  );
};
