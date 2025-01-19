import { Theme } from "~/theme/Theme";
import { DEFAULT_THEME } from "~/theme/defaultTheme";

export function normalizeTheme(value?: any): Theme {
  if (!value || !ALLOWED_VALUES.includes(value)) {
    return DEFAULT_THEME;
  }

  return value;
}

const ALLOWED_VALUES: Theme[] = ["dark", "light"];
