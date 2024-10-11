import { PropsWithChildren } from "react";
import cn from "classnames";

import * as styles from "./Text.css";

type TextProps = PropsWithChildren<{
  as?: "span" | "p" | "h2";
  hasMargin?: boolean;
  isBold?: boolean;
}>;

export function Text({ children, as = "span", hasMargin, isBold }: TextProps) {
  const Component = as;

  return (
    <Component
      className={cn(styles.wrapper, {
        [styles.withMargin]: hasMargin,
        [styles.withBoldStyle]: isBold,
      })}
    >
      {children}
    </Component>
  );
}
