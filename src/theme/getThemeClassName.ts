import { Theme } from "~/theme/Theme";
import { light } from "~/styles/themes/light.css";
import { dark } from "~/styles/themes/dark.css";

export function getThemeClassName(theme: Theme) {
  const classNames = {
    dark,
    light,
  };

  return classNames[theme];
}
