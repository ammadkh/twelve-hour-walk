import React, { useEffect, useContext, createRef } from "react";

import { LocationManagerContext } from "../../../services/location/location.context";
import { BottomSheetComponent } from "../components/bottom-sheet/bottom-sheet.component";
import { MapViewComponent } from "../components/map-view/map-view.component";
import { Container } from "./map.styles";
import { DrawerIconContainer } from "./map.styles";
import { MenuIcon } from "./map.styles";

const setCameraValue = (location) => ({
  center: {
    latitude: location.latitude,
    longitude: location.longitude,
  },
  zoom: 18,
  heading: 20,
  pitch: 10,
  altitude: 10,
});

export const MapScreen = ({ navigation }) => {
  const { location, coordinates, startWalk, getCurrentLocation } = useContext(
    LocationManagerContext
  );
  const mapRef = createRef(null);

  useEffect(() => {
    setTimeout(() => {
      startWalk();
    }, 5000);
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const newCamera = setCameraValue(location);
      mapRef.current.animateCamera(newCamera, { duration: 2000 });
    }
  }, [location]);

  const newLocationHandler = () => {
    getCurrentLocation();
  };

  return (
    <Container>
      <MapViewComponent
        ref={mapRef}
        setNewLocation={newLocationHandler}
        coordinates={coordinates}
      />
      <DrawerIconContainer>
        <MenuIcon onPress={() => navigation.toggleDrawer()} />
      </DrawerIconContainer>
      <BottomSheetComponent />
    </Container>
  );
};
