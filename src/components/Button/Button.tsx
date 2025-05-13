"use client";

import { useButton } from "react-aria";
import { PropsWithChildren, useRef } from "react";

import Spinner from "~/icons/spinner.svg";

import * as styles from "./Button.css";

type ButtonProps = PropsWithChildren<{
  onPress?: () => void;
  size?: "medium" | "big";
  isLoading?: boolean;
  variant?: "primary" | "secondary";
  type?: "submit" | "button";
}>;

export function Button({
  children,
  size = "medium",
  onPress,
  isLoading = false,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton({ onPress, type }, ref);

  return (
    <button {...buttonProps} className={styles.button({ size, variant })}>
      <span className={styles.content({ hidden: isLoading })}>{children}</span>
      {isLoading && <Spinner className={styles.spinner} />}
    </button>
  );
}
