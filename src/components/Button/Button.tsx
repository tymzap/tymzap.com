import { useButton } from "react-aria";
import { PropsWithChildren, useRef } from "react";

import * as styles from "./Button.css";
import { ButtonIcon } from "./ButtonIcon";

type ButtonProps = PropsWithChildren<{
  onPress?: () => void;
}>;

export function Button({ children, onPress }: ButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton({ onPress }, ref);

  return (
    <button {...buttonProps} className={styles.button}>
      {children}
    </button>
  );
}

Button.Icon = ButtonIcon;
