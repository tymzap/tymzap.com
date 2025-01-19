import { Theme } from "~/theme/Theme";
import { getOppositeTheme } from "~/theme/getOppositeTheme";
import { useTheme } from "~/theme/ThemeProvider";
import { getThemeClassName } from "~/theme/themeClassNames";

type UseThemeOverrideParams = {
  theme?: Theme;
  flip?: boolean;
};

export function useThemeOverride({
  flip,
  theme: themeProp,
}: UseThemeOverrideParams) {
  const { theme: globalTheme } = useTheme();

  const theme = getTheme(globalTheme, themeProp, flip);

  const themeClassName = theme ? getThemeClassName(theme) : undefined;

  return {
    themeClassName,
  };
}

function getTheme(globalTheme?: Theme, themeProp?: Theme, flip?: boolean) {
  if (flip && globalTheme) {
    return getOppositeTheme(globalTheme);
  }

  return themeProp;
}
