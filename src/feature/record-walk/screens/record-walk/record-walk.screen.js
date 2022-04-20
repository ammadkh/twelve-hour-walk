import React, { useEffect, useContext, createRef } from "react";

import { LocationManagerContext } from "../../../../services/location/location.context";
import { CircularProgressComponent } from "../../../circular-progress/screen/circular-progress.screen";
import { MapViewComponent } from "../../components/map-view/map-view.component";
import { Container } from "./record-walk.styles";
import { DrawerIconContainer } from "./record-walk.styles";
import { MenuIcon } from "./record-walk.styles";

const setCameraValue = (location) => ({
  center: {
    latitude: location.latitude,
    longitude: location.longitude,
  },
  zoom: 16,
  heading: 30,
  pitch: 20,
  altitude: 20,
});

export const RecordWalkScreen = ({ navigation }) => {
  const { location, coordinates, startWalk, getCurrentLocation } = useContext(
    LocationManagerContext
  );
  const mapRef = createRef(null);

  useEffect(() => {
    // setTimeout(() => {
    startWalk();
    // }, 5000);
    // getCurrentLocation();
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
      <CircularProgressComponent navigation={navigation} />
    </Container>
  );
};
