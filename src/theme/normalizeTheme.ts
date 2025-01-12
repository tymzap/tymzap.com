import { Theme } from "~/theme/Theme";
import { DEFAULT_THEME } from "~/theme/defaultTheme";

export function normalizeTheme(
  value: any,
  returnsDefaultValue: false,
): Theme | undefined;
export function normalizeTheme(value: any, returnsDefaultValue?: true): Theme;

export function normalizeTheme(
  value?: any,
  returnsDefaultValue = true,
): Theme | undefined {
  if (!value || !ALLOWED_VALUES.includes(value)) {
    return returnsDefaultValue ? DEFAULT_THEME : undefined;
  }

  return value;
}

const ALLOWED_VALUES: Theme[] = ["dark", "light"];
