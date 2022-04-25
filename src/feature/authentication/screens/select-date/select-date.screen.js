import React, { useState, useRef, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import moment from "moment";

import { AuthWrapper } from "../../components/auth-wrapper.component";
import { AuthHeader } from "../../components/auth-header.component";
import { InputComponent } from "../../../../components/UI/input.component";
import { ButtonComponent } from "../../../../components/UI/button.component";
import { BottomSheet } from "@rneui/themed";
import { colors } from "../../../../infrastructure/theme/colors";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const getPushToken = () => {
  if (!Constants.isDevice) {
    return Promise.reject("Must use physical device for Push Notifications");
  }

  try {
    return Notifications.getPermissionsAsync()
      .then((statusResult) => {
        return statusResult.status !== "granted"
          ? Notifications.requestPermissionsAsync()
          : statusResult;
      })
      .then((statusResult) => {
        if (statusResult.status !== "granted") {
          throw "Failed to get push token for push notification!";
        }
        return Notifications.getExpoPushTokenAsync();
      })
      .then((tokenData) => tokenData.data);
  } catch (error) {
    return Promise.reject("Couldn't check notifications permissions");
  }
};

export const SelectDateScreen = () => {
  const [showBottomSheet, setShowBottomSheet] = useState();
  const [date, setDate] = useState(new Date().toDateString());
  const [expoPushToken, setExpoPushToken] = useState();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [notification, setNotification] = useState();
  const notificationListener = useRef();
  const responseListener = useRef();

  const onCommit = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    const utcTime = moment(date);
    console.log(utcTime, "moment");
    const offset = moment().utcOffset();
    const localTime = moment.utc(utcTime).utcOffset(offset);
    const trigger = new Date(localTime);
    trigger.setHours(9);
    trigger.setMinutes(0);
    trigger.setSeconds(0);
    console.log(trigger, "trigger..");
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Happy Walking!",
      },
      trigger,
    });
  };

  useEffect(() => {
    getPushToken().then((pushToken) => {
      setExpoPushToken(pushToken);
      if (pushToken) {
        console.log(pushToken, "push token..");
        //retrieveWeatherSubscription(pushToken, setIsSubscribed);
      }
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener(setNotification);

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        setNotification(response.notification);
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return (
    <AuthWrapper>
      <AuthHeader title="Select Walk Date"></AuthHeader>
      <InputComponent
        value={date}
        placeholder="Select Walk Date"
        icon="chevron-down"
        onPress={() =>
          setShowBottomSheet((showBottomSheet) => !showBottomSheet)
        }
      />
      <BottomSheet
        isVisible={showBottomSheet}
        onBackdropPress={() => setShowBottomSheet(false)}
      >
        <DateTimePicker
          value={new Date(date)}
          is24Hour
          themeVariant="dark"
          display="spinner"
          textColor={colors.text.primary}
          style={{ width: "100%" }}
          onChange={(event, data) => setDate(data.toDateString())}
        />
      </BottomSheet>
      <ButtonComponent onPress={onCommit}>Commit</ButtonComponent>
    </AuthWrapper>
  );
};
