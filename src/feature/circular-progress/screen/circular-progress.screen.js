import React, { useContext } from "react";
import { Dimensions, View, Image } from "react-native";
import { Icon } from "@rneui/themed";
import styled from "styled-components/native";

import { ButtonComponent } from "../../../components/UI/button.component";
import { StopwatchContext } from "../../../services/stopwatch/stopwatch.context";
import { AnimatedProgress } from "../components/animated-progress.component";
import { colors } from "../../../infrastructure/theme/colors";
import { NavigationContext } from "@react-navigation/native";

const Container = styled.View`
  height: ${Dimensions.get("window").height / 2.2}px;
  width: 80%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0px;
  z-index: 10;
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
  justify-content: space-around;
  align-items: center;
  padding-bottom: ${Platform.OS === "ios" ? 20 : 0}px;
  padding-top: ${Platform.OS === "ios" ? 30 : 20}px;
`;

export const CircularProgressComponent = React.memo((props) => {
  const { startStopwatch } = useContext(StopwatchContext);
  const navigation = React.useContext(NavigationContext);
  return (
    <Container>
      <AnimatedProgress />
      {!startStopwatch && (
        <ButtonComponent
          onPress={() => {
            props.navigation.navigate("permissions");
          }}
        >
          Start The 12 Hour Walk
        </ButtonComponent>
      )}
      {startStopwatch && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <View style={{ marginRight: 50 }}>
            <Icon
              name="arrow-left-circle"
              type="simple-line-icon"
              size={40}
              color={colors.icon.primary}
              onPress={() => navigation.navigate("restart-walk")}
            />
          </View>
          <Icon
            name="close"
            type="simple-line-icon"
            size={40}
            color={colors.icon.primary}
            onPress={() => navigation.navigate("end-walk")}
          />
        </View>
      )}
    </Container>
  );
});
