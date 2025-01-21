"use client";

import { createContext } from "react";

import { Theme } from "~/theme/Theme";

export type ThemeContextValue = {
  theme: Theme | undefined;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  hasThemeOverride: boolean;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);
