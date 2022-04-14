import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { MapScreen, MapView } from "./src/feature/map/screens/map.screen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Navigation /> */}
      <MapScreen />
    </ThemeProvider>
  );
}
