"use client";

import { createContext } from "react";

import { Theme } from "~/theme/Theme";

type ThemeContextValue = {
  theme: Theme | undefined;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);
