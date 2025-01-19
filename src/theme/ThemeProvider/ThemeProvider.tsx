"use client";

import { PropsWithChildren } from "react";

import { ThemeContext } from "./ThemeContext";
import { useThemeProvider } from "./useThemeProvider";
import { ThemeScript } from "../ThemeScript";

type ThemeProviderProps = PropsWithChildren;

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme, setTheme, toggleTheme, hasThemeOverride } = useThemeProvider();

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme, hasThemeOverride }}
    >
      <ThemeScript />
      {children}
    </ThemeContext.Provider>
  );
}
