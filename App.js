import { ThemeProvider } from "styled-components";
import { initializeApp } from "firebase/app";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationProvider } from "./src/services/authentication/authentication.context";

export default function App() {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyC4Jb1mz6TlCu-M-mqCLrpSE0G82cs27QI",
    authDomain: "hour-walk.firebaseapp.com",
    projectId: "hour-walk",
    storageBucket: "hour-walk.appspot.com",
    messagingSenderId: "492884035502",
    appId: "1:492884035502:web:32d76b2eef7cfa297b2a3f",
  };

  initializeApp(firebaseConfig);
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationProvider>
        <Navigation />
      </AuthenticationProvider>
    </ThemeProvider>
  );
}
