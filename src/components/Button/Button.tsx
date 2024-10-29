import { useButton } from "react-aria";
import { PropsWithChildren, useRef } from "react";

import * as styles from "./Button.css";
import { ButtonIcon } from "./ButtonIcon";

type ButtonProps = PropsWithChildren<{
  onPress?: () => void;
  size?: "medium" | "big";
}>;

export function Button({ children, size = "medium", onPress }: ButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton({ onPress }, ref);

  return (
    <button {...buttonProps} className={styles.button({ size })}>
      {children}
    </button>
  );
}

Button.Icon = ButtonIcon;
