import React, { createContext, useState } from "react";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

const LOCATION_TASK_NAME = "background-location-task";

export const LocationManagerContext = createContext();

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.log(error, "error");
    return;
  }
});

export const LocationManagerProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: 37.331595,
    longitude: -122.4324,
  });
  const [coordinates, setCoordinates] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const foregroundPermissionHandler = async () => {
    const response = await Location.getForegroundPermissionsAsync();
    if (response.status !== "granted") {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("android Permission to access location was denied");
        return;
      }
    }
  };

  const backgroundPermissionHandler = async () => {
    const response = await Location.getBackgroundPermissionsAsync();
    if (response.status !== "granted") {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    }
  };

  const getCurrentLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    setLocation({ latitude, longitude });
    setCoordinates((prevValue) => [...prevValue, { longitude, latitude }]);
  };

  const startLocationUpdate = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.Highest,
    });
  };

  const startWalk = async () => {
    await foregroundPermissionHandler();
    await backgroundPermissionHandler();
    await getCurrentLocation();
    await startLocationUpdate();
  };
  return (
    <LocationManagerContext.Provider
      value={{ location, coordinates, startWalk, getCurrentLocation }}
    >
      {children}
    </LocationManagerContext.Provider>
  );
};
