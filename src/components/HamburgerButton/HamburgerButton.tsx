"use client";

import { useButton } from "react-aria";
import { useRef } from "react";

import { Hamburger } from "./Hamburger";
import * as styles from "./HamburgerButton.css";

type HamburgerButtonProps = {
  onPress: () => void;
  isPressed: boolean;
  color?: "black" | "white";
};

export function HamburgerButton({
  onPress,
  isPressed,
  color = "black",
}: HamburgerButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(
    { onPress, "aria-pressed": isPressed },
    ref,
  );

  return (
    <button ref={ref} className={styles.button({ color })} {...buttonProps}>
      <Hamburger isPressed={isPressed} />
    </button>
  );
}
