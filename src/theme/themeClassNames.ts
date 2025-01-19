import { light } from "~/styles/themes/light.css";
import { dark } from "~/styles/themes/dark.css";
import { Theme } from "~/theme/Theme";

export const themeClassNames: Record<Theme, string> = {
  light,
  dark,
};

export function getThemeClassName(theme: Theme) {
  return themeClassNames[theme];
}
