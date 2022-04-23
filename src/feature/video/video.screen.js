import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import { Camera } from "expo-camera";
import { Icon } from "@rneui/themed";
import styled from "styled-components/native";

const Wrapper = styled.View`
  flex: 1;
`;
const CameraCtnr = styled(Camera)`
  flex: 1;
`;
const ActionWrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 130px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const BtnWrapper = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-color: rgb(255, 255, 255);
  border-width: 3px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

const BackCntr = styled.View`
  padding: 40px;
  color: rgb(255, 255, 255);
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

export const VideoScreen = () => {
  const navigation = useContext(NavigationContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [record, setRecord] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const response = await Camera.getCameraPermissionsAsync();
      console.log(response, "res");
      if (!response.granted) {
        const { status } = await Camera.requestCameraPermissionsAsync();
      }
      setHasPermission(true);
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white" }}>No access to camera</Text>
      </View>
    );
  }

  const startRecord = async () => {
    const { status } = await Camera.requestMicrophonePermissionsAsync();
    if (status === "granted") {
      const response = await cameraRef.current.recordAsync();
      console.log(response, "camera record..");
    }
  };

  const stopRecord = () => {
    cameraRef.current.stopRecording();
  };
  return (
    <Wrapper>
      <CameraCtnr ref={cameraRef} type={Camera.Constants.Type.front}>
        <ActionWrapper>
          <BtnWrapper>
            {!record && (
              <Icon
                name="fiber-manual-record"
                size={30}
                color="red"
                onPress={() => {
                  setRecord(true);
                  startRecord();
                }}
              />
            )}
            {record && (
              <Icon
                name="stop"
                size={30}
                color="red"
                onPress={() => {
                  setRecord(false);
                  stopRecord();
                }}
              />
            )}
          </BtnWrapper>
          <BackCntr>
            <Icon
              name="ios-return-up-back"
              type="ionicon"
              size={30}
              color="white"
              onPress={() => navigation.goBack()}
            />
          </BackCntr>
        </ActionWrapper>
      </CameraCtnr>
    </Wrapper>
  );
};
