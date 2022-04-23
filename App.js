import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { LocationManagerProvider } from "./src/services/location/location.context";
import { StopwatchProvider } from "./src/services/stopwatch/stopwatch.context";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StopwatchProvider>
        <LocationManagerProvider>
          <Navigation />
        </LocationManagerProvider>
      </StopwatchProvider>
    </ThemeProvider>
  );
}
