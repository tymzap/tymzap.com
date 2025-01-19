"use client";

import { themeClassNames } from "~/theme/themeClassNames";
import { DEFAULT_THEME } from "~/theme/defaultTheme";
import { LOCAL_STORAGE_KEYS } from "~/constants/localStorageKeys";

import { addThemeClassName } from "./addThemeClassName";

export function ThemeScript() {
  const serializedArguments = serializeArguments([
    LOCAL_STORAGE_KEYS.THEME,
    themeClassNames,
    DEFAULT_THEME,
  ]);
  const serializedScript = `(${addThemeClassName.toString()})(${serializedArguments})`;

  return <script suppressHydrationWarning={true}>{serializedScript}</script>;
}

function serializeArguments(values: Parameters<typeof addThemeClassName>) {
  return JSON.stringify(values).slice(1, -1);
}
