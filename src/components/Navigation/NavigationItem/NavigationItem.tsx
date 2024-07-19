import { PropsWithChildren } from "react";

import * as styles from "./NavigationItem.css";

type NavigationItemProps = PropsWithChildren<{
  href: string;
  isCurrent?: boolean;
}>;

export function NavigationItem({
  children,
  href,
  isCurrent,
}: NavigationItemProps) {
  return (
    <a
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={styles.anchor}
    >
      {children}
    </a>
  );
}
