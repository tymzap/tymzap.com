"use client";

import { Theme } from "~/theme/Theme";

import * as styles from "./ThemeButton.css";
import { useThemeButton } from "./useThemeButton";

type ThemeButtonProps = {
  theme: Theme | undefined;
  onPress: () => void;
};

export function ThemeButton({ onPress, theme }: ThemeButtonProps) {
  const { buttonProps, Icon } = useThemeButton({ onPress, theme });

  return (
    <button {...buttonProps} className={styles.button}>
      <Icon />
    </button>
  );
}
