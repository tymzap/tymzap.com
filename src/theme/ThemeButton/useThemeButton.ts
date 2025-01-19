import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useButton } from "react-aria";

import Moon from "~/icons/moon.svg";
import Sun from "~/icons/sun.svg";
import { useTheme } from "~/theme/ThemeProvider";

type UseThemeButtonParams = {
  onPress?: () => void;
};

export function useThemeButton({
  onPress: onPressParam,
}: UseThemeButtonParams) {
  const { theme, toggleTheme, hasThemeOverride } = useTheme();

  const t = useTranslations();

  const label =
    theme === "dark" ? t("switchToLightMode") : t("switchToDarkMode");
  const Icon = theme === "dark" ? Moon : Sun;

  const onPress = () => {
    toggleTheme();
    onPressParam?.();
  };

  const ref = useRef(null);
  const { buttonProps } = useButton({ onPress, "aria-label": label }, ref);

  const isVisible = !hasThemeOverride;

  return {
    Icon,
    buttonProps,
    isVisible,
  };
}
