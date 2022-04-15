import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { MapScreen } from "./src/feature/map/screens/map.screen";
import { LocationManagerProvider } from "./src/services/location/location.context";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Navigation /> */}
      <LocationManagerProvider>
        <MapScreen />
      </LocationManagerProvider>
    </ThemeProvider>
  );
}
