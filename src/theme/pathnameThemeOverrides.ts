import { Theme } from "~/theme/Theme";

export const PATHNAME_THEME_OVERRIDES: Record<string, Theme> = {};

export function getThemeOverrideForPathname(pathname: string) {
  const matchingPathname = Object.keys(PATHNAME_THEME_OVERRIDES).find((key) =>
    pathname.startsWith(key),
  );

  if (!matchingPathname) {
    return null;
  }

  return PATHNAME_THEME_OVERRIDES[matchingPathname];
}
