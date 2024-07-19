import { PropsWithChildren } from "react";

import { NavigationItem } from "./NavigationItem";
import * as styles from "./Navigation.css";

type NavigationProps = PropsWithChildren;

export function Navigation({ children }: NavigationProps) {
  return <nav className={styles.navigation}>{children}</nav>;
}

Navigation.Item = NavigationItem;
