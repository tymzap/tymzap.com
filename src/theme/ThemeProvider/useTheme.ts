"use client";

import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

export function useTheme() {
  const contextValue = useContext(ThemeContext);

  if (!contextValue) {
    throw new Error("useTheme should be used inside ThemeProvider");
  }

  return contextValue;
}
