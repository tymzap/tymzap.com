import { PropsWithChildren } from "react";

import * as styles from "./MarginWrapper.css";

type MarginWrapperProps = PropsWithChildren<{
  as?: "div" | "span" | "section";
  hasTopMargin?: boolean;
  hasBottomMargin?: boolean;
}>;

export function MarginWrapper({
  as: Component = "div",
  hasTopMargin = true,
  hasBottomMargin = true,
  children,
}: MarginWrapperProps) {
  return (
    <Component
      className={styles.wrapper({
        withTopMargin: hasTopMargin,
        withBottomMargin: hasBottomMargin,
      })}
    >
      {children}
    </Component>
  );
}
