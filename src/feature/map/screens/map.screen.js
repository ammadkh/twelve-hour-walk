import React, { useEffect, useRef, useContext } from "react";
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { LocationManagerContext } from "../../../services/location/location.context";
import mapStyles from "./mapStyle.json";
import { ButtonComponent } from "../../../components/UI/button.component";
import ProgressCircle from "react-native-progress-circle";

export const MapScreen = () => {
  const { location, coordinates, startWalk, getCurrentLocation } = useContext(
    LocationManagerContext
  );
  const mapRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      startWalk();
    }, 5000);
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const newCamera = {
        center: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        zoom: 18,
        heading: 0,
        pitch: 10,
        altitude: 10,
      };

      mapRef.current.animateCamera(newCamera, { duration: 2000 });
    }
  }, [location]);

  const setNewLocation = () => {
    getCurrentLocation();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 400,
          width: "85%",
          position: "absolute",
          backgroundColor: "black",
          bottom: 0,
          zIndex: 10,
          borderTopLeftRadius: 200,
          borderTopRightRadius: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProgressCircle
          percent={30}
          radius={50}
          borderWidth={8}
          color="#3399FF"
          shadowColor="#999"
          bgColor="#fff"
        >
          <Text style={{ fontSize: 18 }}>{"30%"}</Text>
        </ProgressCircle>
        <ButtonComponent>Start The 12 Hour Walk</ButtonComponent>
      </View>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        onUserLocationChange={setNewLocation}
        showsUserLocation={true}
        followsUserLocation={true}
        showsBuildings={false}
        initialCamera={{
          center: { latitude: 0, longitude: 0 },
          pitch: 0,
          zoom: 0,
          heading: 0,
          altitude: 0,
        }}
        customMapStyle={mapStyles}
      >
        <Polyline
          coordinates={coordinates}
          strokeColors={["#28abe2", "#db3e3a"]}
          strokeColor="#db3e3a"
          strokeWidth={8}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
