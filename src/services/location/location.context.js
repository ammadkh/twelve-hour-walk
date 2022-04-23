import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { EventEmitter } from "fbemitter";
import getDistance from "geolib/es/getDistance";
import convertDistance from "geolib/es/convertDistance";
import { StopwatchContext } from "../stopwatch/stopwatch.context";

const BACKGROUND_LOC = "background-location-task";
export const eventEmitter = new EventEmitter();

TaskManager.defineTask(BACKGROUND_LOC, ({ data, error }) => {
  if (error) {
    console.log(error, "error");
    return;
  }
  if (data) {
    eventEmitter.emit("dataa", data);
  }
});
const initLocationState = { latitude: 0, longitude: 0 };
export const LocationManagerContext = createContext();

export const LocationManagerProvider = ({ children }) => {
  const [initLocation, setInitLocation] = useState(initLocationState);
  const [location, setLocation] = useState(initLocationState);
  const [coordinates, setCoordinates] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [coveredDistance, setCoveredDistance] = useState(0);
  const [isStartWalk, setIsStartWalk] = useState(false);
  const eventSubscription = useRef();

  const {
    start: startStopwatch,
    stop: stopStopwatch,
    timeSpentInPercentage,
  } = useContext(StopwatchContext);

  useEffect(() => {
    if (timeSpentInPercentage > 95) {
      stopLocationUpdate();
    }
  }, [timeSpentInPercentage]);

  useEffect(() => {
    async function check() {
      const hasLocationUpdate = await Location.hasStartedLocationUpdatesAsync(
        BACKGROUND_LOC
      );
      if (hasLocationUpdate) {
        stopLocationUpdate();
      }
    }
    check();
  }, []);

  useEffect(() => {
    if (!startWalk) {
      return;
    }
    eventSubscription.current = eventEmitter.addListener(
      "dataa",
      ({ locations }) => {
        const { coords } = locations[0];
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
        setCoordinates((prevValue) => [...prevValue, { longitude, latitude }]);
        const distance = getDistance(initLocation, {
          longitude,
          latitude,
        });
        setCoveredDistance(convertDistance(distance, "mi"));
        console.log(convertDistance(distance, "mi"), "distance..");
      }
    );
    return () => {
      eventSubscription.current.remove();
      eventSubscription.current = null;
      console.log("removeee.......................");
    };
  }, [isStartWalk]);

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
    console.log(response, "get background permission");
    if (response.status !== "granted") {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      console.log(status, "sttt");
      console.log(status, "request background permission..");
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    }
  };

  const getCurrentLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    setInitLocation({ latitude, longitude });
    setLocation({ latitude, longitude });
    setCoordinates((prevValue) => [...prevValue, { longitude, latitude }]);
  };

  const startLocationUpdate = async () => {
    await Location.startLocationUpdatesAsync(BACKGROUND_LOC, {
      accuracy: Location.Accuracy.Highest,
    });
  };

  const stopLocationUpdate = async () => {
    console.log("stop location............................");
    await Location.stopLocationUpdatesAsync(BACKGROUND_LOC);
    stopStopwatch();
    setIsStartWalk(false);
    setCoveredDistance(0);
    setCoordinates([]);
  };

  const getPermissions = async () => {
    try {
      await foregroundPermissionHandler();
      await backgroundPermissionHandler();
      await getCurrentLocation();
    } catch (error) {
      console.log(error, "somthing get wrong with permission");
    }
  };

  const startWalk = async () => {
    const hasBackgroundPermission =
      await Location.getBackgroundPermissionsAsync();
    if (!hasBackgroundPermission.granted) {
      console.log("background permission not granted!!");
      return;
    }
    await startLocationUpdate();
    startStopwatch();
    setIsStartWalk(true);
  };
  return (
    <LocationManagerContext.Provider
      value={{
        location,
        coordinates,
        startWalk,
        getCurrentLocation,
        stopLocationUpdate,
        coveredDistance,
        getPermissions,
      }}
    >
      {children}
    </LocationManagerContext.Provider>
  );
};
