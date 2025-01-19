import { Theme } from "~/theme/Theme";

export function getOppositeTheme(theme: Theme) {
  const opposites: Record<Theme, Theme> = {
    dark: "light",
    light: "dark",
  };

  return opposites[theme];
}
