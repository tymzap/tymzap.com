import { useEffect } from "react";
import { useLocalStorage } from "react-use";
import { usePathname } from "next/navigation";

import { getThemeOverrideForPathname } from "~/theme/pathnameThemeOverrides";
import { getOppositeTheme } from "~/theme/getOppositeTheme";
import { Theme } from "~/theme/Theme";
import { getThemeClassName } from "~/theme/themeClassNames";
import { normalizeTheme } from "~/theme/normalizeTheme";
import { DEFAULT_THEME } from "~/theme/defaultTheme";
import { LOCAL_STORAGE_KEYS } from "~/constants/localStorageKeys";

export function useThemeProvider() {
  const pathname = usePathname();

  const [theme, setTheme] = useLocalStorage<Theme>(
    LOCAL_STORAGE_KEYS.THEME,
    DEFAULT_THEME,
    {
      serializer: JSON.stringify,
      deserializer: (value) => normalizeTheme(JSON.parse(value)),
      raw: false,
    },
  );

  const themeOverride = getThemeOverrideForPathname(pathname);

  const toggleTheme = () => {
    setTheme(getOppositeTheme(theme ?? DEFAULT_THEME));
  };

  useEffect(() => {
    if (!theme) {
      return;
    }

    syncThemeClassName(themeOverride ?? theme);
  }, [theme, themeOverride]);

  return {
    theme,
    toggleTheme,
    setTheme,
    hasThemeOverride: Boolean(themeOverride),
  };
}

function syncThemeClassName(theme: Theme) {
  const themeToRemove = getOppositeTheme(theme);

  document.documentElement.classList.add(getThemeClassName(theme));
  document.documentElement.classList.remove(getThemeClassName(themeToRemove));
}
