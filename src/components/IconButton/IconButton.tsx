import { ComponentType, SVGProps, useRef } from "react";
import { useButton } from "react-aria";

import * as styles from "./IconButton.css";

type IconButtonProps = {
  icon: ComponentType<SVGProps<SVGElement>>;
  onPress?: () => void;
  label?: string;
  size?: number;
  color?: "black" | "white";
};

export function IconButton({
  icon: Icon,
  onPress,
  label,
  size = DEFAULT_SIZE,
  color = "black",
}: IconButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton({ onPress, "aria-label": label }, ref);

  return (
    <button ref={ref} {...buttonProps} className={styles.button({ color })}>
      <Icon width={size} height={size} />
    </button>
  );
}

const DEFAULT_SIZE = 32;
