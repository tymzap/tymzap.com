"use client";

import * as styles from "./ThemeButton.css";
import { useThemeButton } from "./useThemeButton";

type ThemeButtonProps = {
  onPress?: () => void;
};

export function ThemeButton({ onPress }: ThemeButtonProps) {
  const { buttonProps, Icon } = useThemeButton({ onPress });

  return (
    <button {...buttonProps} className={styles.button}>
      <Icon />
    </button>
  );
}
