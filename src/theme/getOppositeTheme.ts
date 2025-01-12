import { Theme } from "~/theme/Theme";

export function getOppositeTheme(theme: Theme) {
  const opposites = {
    dark: "light",
    light: "dark",
  } as const;

  return opposites[theme];
}
