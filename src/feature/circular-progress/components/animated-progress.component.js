import React, { useContext } from "react";
import { Image, Text } from "react-native";
import moment from "moment";
import styled from "styled-components/native";

import AnimatedCircularProgress from "../../../components/circular-progress/animated-progress.component";
import { StopWatchComponent } from "./stop-watch.component";
import { StopwatchContext } from "../../../services/stopwatch/stopwatch.context";
import { LocationManagerContext } from "../../../services/location/location.context";

const ImgContainer = styled.View`
  align-items: center;
`;

export const AnimatedProgress = () => {
  const { coveredDistance } = useContext(LocationManagerContext);
  const { timeSpentInPercentage, endTime } = useContext(StopwatchContext);
  return (
    <AnimatedCircularProgress
      size={200}
      width={20}
      fill={timeSpentInPercentage}
      rotation={0}
      tintColor="grey"
      lineCap="round"
      tintSecondaryColor
      backgroundColor="#3d5875"
    >
      {() => (
        <ImgContainer>
          <Image
            source={require("../../../../assets/white-men.png")}
            style={{ height: 35, width: 20 }}
          />
          <StopWatchComponent />
          {endTime && (
            <Text style={{ color: "white" }}>
              End at {moment(endTime).format("hh:mm A")}
            </Text>
          )}
          <Text style={{ color: "white" }}>
            {coveredDistance.toFixed(1) + " mi. walked"}
          </Text>
        </ImgContainer>
      )}
    </AnimatedCircularProgress>
  );
};
