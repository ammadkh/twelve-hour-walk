import React, { createContext, useEffect, useState } from "react";
import {
  login,
  register,
  logout,
  stateChange,
  resetPassword,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  stateChange((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  const onResetPassword = (email) => {
    setError(null);
    setIsLoading(true);
    resetPassword(email)
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.log(error, "errr");
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setIsLoading(false);
      });
  };

  const onLogin = (email, password) => {
    setError(null);
    setIsLoading(true);
    login(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setIsLoading(false);
        // ...
      })
      .catch((error) => {
        console.log(error, "errr");
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setIsLoading(false);
        // ..
      });
  };

  const onRegister = (email, password, terms) => {
    setError(null);
    if (!terms) {
      setError("Kindly agree to terms and conditions.");
      return;
    }
    setIsLoading(true);
    register(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setIsLoading(false);
        // ..
      });
  };

  const onLogout = () => {
    logout()
      .then(() => setUser(null))
      .catch((err) => console.log(err));
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onResetPassword,
        onLogout,
        setError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
