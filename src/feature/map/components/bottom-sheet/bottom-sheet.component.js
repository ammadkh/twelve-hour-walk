import React from "react";
import { Dimensions, View, Image, Text } from "react-native";
import { ButtonComponent } from "../../../../components/UI/button.component";
import AnimatedCircularProgress from "../circular-progress/animated-progress.component";

export const BottomSheetComponent = () => {
  return (
    <View
      style={{
        height: Dimensions.get("window").height / 2.2,
        width: "80%",
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        bottom: 0,
        zIndex: 10,
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: Platform.OS === "ios" ? 20 : 0,
        paddingTop: Platform.OS === "ios" ? 50 : 40,
      }}
    >
      <AnimatedCircularProgress
        size={200}
        width={20}
        fill={99}
        rotation={0}
        tintColor="grey"
        lineCap="round"
        tintSecondaryColor
        backgroundColor="#3d5875"
      >
        {() => (
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../../../../assets/white-men.png")}
              style={{ height: 35, width: 20 }}
            />
            <Text style={{ color: "white", fontSize: 30, marginTop: 12 }}>
              00:00:00
            </Text>
            <Text style={{ color: "white" }}>End at 6.30 PM</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <ButtonComponent>Start The 12 Hour Walk</ButtonComponent>
    </View>
  );
};
