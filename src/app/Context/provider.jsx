"use client";

import { AuthContextProvider } from "./AuthContext";
import ThemeProvider from "./ThemeProvider";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
        <AuthContextProvider>{children}</AuthContextProvider>      
    </ThemeProvider>
  );
};

export default Providers;