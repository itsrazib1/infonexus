"use client";

import "../styles/auth.css";
import "../styles/chats.css";
import { ContextProvider } from ".";
import { AuthContextProvider } from "./AuthContext";
import ThemeProvider from "./ThemeProvider";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <ContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </ContextProvider>
    </ThemeProvider>
  );
};

export default Providers;