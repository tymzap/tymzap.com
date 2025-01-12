import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next/client";

import { COOKIE_KEYS } from "~/constants/cookieKeys";
import { getOppositeTheme } from "~/theme/getOppositeTheme";
import { Theme } from "~/theme/Theme";
import { getThemeClassName } from "~/theme/getThemeClassName";
import { normalizeTheme } from "~/theme/normalizeTheme";
import { DEFAULT_THEME } from "~/theme/defaultTheme";

export function useThemeProvider() {
  const themeFromCookie = normalizeTheme(getCookie(COOKIE_KEYS.THEME), false);
  const [theme, setThemeState] = useState(themeFromCookie);

  const setTheme = (theme: Theme) => {
    setCookie(COOKIE_KEYS.THEME, theme);
    setThemeState(theme);
  };

  useEffect(() => {
    if (!theme) {
      return;
    }

    syncThemeClassName(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(getOppositeTheme(theme ?? DEFAULT_THEME));
  };

  return {
    theme,
    toggleTheme,
    setTheme,
  };
}

function syncThemeClassName(theme: Theme) {
  const themeToRemove = getOppositeTheme(theme);

  document.body.classList.add(getThemeClassName(theme));
  document.body.classList.remove(getThemeClassName(themeToRemove));
}
