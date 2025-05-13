import { isClient } from "~/lib/isClient";

import { DEFAULT_THEME } from "./defaultTheme";
import { Theme } from "./Theme";

export function getSystemTheme(): Theme {
  if (!isClient() || !window.matchMedia) {
    return DEFAULT_THEME;
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  return mediaQuery.matches ? "dark" : "light";
}
