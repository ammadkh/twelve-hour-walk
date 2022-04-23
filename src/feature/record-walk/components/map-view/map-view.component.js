import React, { forwardRef } from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import mapStyles from "./mapStyle.json";

export const MapViewComponent = forwardRef((props, ref) => {
  return (
    <MapView
      ref={ref}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      //onUserLocationChange={props.setNewLocation}
      showsUserLocation={props.location.latitude > 0 ? true : false}
      followsUserLocation={true}
      showsBuildings={false}
      initialCamera={{
        center: props.location,
        zoom: 0,
        heading: 0,
        pitch: 0,
        altitude: 0,
      }}
      customMapStyle={mapStyles}
    >
      <Polyline
        coordinates={props.coordinates}
        strokeColors={["#28abe2", "#db3e3a"]}
        strokeColor="#db3e3a"
        strokeWidth={8}
      />
    </MapView>
  );
});

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
