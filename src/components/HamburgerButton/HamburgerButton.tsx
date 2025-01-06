"use client";

import { useButton } from "react-aria";
import { useRef } from "react";

import { Hamburger } from "./Hamburger";
import * as styles from "./HamburgerButton.css";

type HamburgerButtonProps = {
  onPress: () => void;
  isPressed: boolean;
};

export function HamburgerButton({ onPress, isPressed }: HamburgerButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(
    { onPress, "aria-pressed": isPressed },
    ref,
  );

  return (
    <button ref={ref} className={styles.button} {...buttonProps}>
      <Hamburger isPressed={isPressed} />
    </button>
  );
}
