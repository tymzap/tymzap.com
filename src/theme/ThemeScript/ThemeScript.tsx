"use client";

import { usePathname } from "next/navigation";

import { themeClassNames } from "~/theme/themeClassNames";
import { DEFAULT_THEME } from "~/theme/defaultTheme";
import { LOCAL_STORAGE_KEYS } from "~/constants/localStorageKeys";
import { getThemeOverrideForPathname } from "~/theme/pathnameThemeOverrides";

import {
  addThemeClassName,
  AddThemeClassNameParams,
} from "./addThemeClassName";

export function ThemeScript() {
  const pathname = usePathname();
  const themeOverride = getThemeOverrideForPathname(pathname);

  const scriptParams: AddThemeClassNameParams = {
    localStorageKey: LOCAL_STORAGE_KEYS.THEME,
    classNames: themeClassNames,
    defaultTheme: DEFAULT_THEME,
    themeOverride,
  };

  const serializedScript = `(${addThemeClassName.toString()})(${JSON.stringify(
    scriptParams,
  )})`;

  return <script suppressHydrationWarning={true}>{serializedScript}</script>;
}
