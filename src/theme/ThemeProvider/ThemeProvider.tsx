"use client";

import { PropsWithChildren } from "react";

import { ThemeContext } from "./ThemeContext";
import { useThemeProvider } from "./useThemeProvider";

type ThemeProviderProps = PropsWithChildren;

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme, setTheme, toggleTheme } = useThemeProvider();

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
