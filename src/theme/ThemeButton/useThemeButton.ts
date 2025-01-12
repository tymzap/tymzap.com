import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useButton } from "react-aria";

import { Theme } from "~/theme/Theme";
import Moon from "~/icons/moon.svg";
import Sun from "~/icons/sun.svg";

type UseThemeButtonParams = {
  theme: Theme | undefined;
  onPress: () => void;
};

export function useThemeButton({ onPress, theme }: UseThemeButtonParams) {
  const t = useTranslations();

  const label =
    theme === "dark" ? t("switchToLightMode") : t("switchToDarkMode");
  const Icon = theme === "dark" ? Moon : Sun;

  const ref = useRef(null);
  const { buttonProps } = useButton({ onPress, "aria-label": label }, ref);

  return {
    Icon,
    buttonProps,
  };
}
