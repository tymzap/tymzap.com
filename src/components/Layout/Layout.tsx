import { PropsWithChildren } from "react";

import * as styles from "./Layout.css";

type LayoutProps = PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
