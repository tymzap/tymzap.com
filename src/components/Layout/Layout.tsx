import { PropsWithChildren, ReactNode } from "react";

import { NavigationBar } from "~/components/NavigationBar";

import * as styles from "./Layout.css";

type LayoutProps = PropsWithChildren<{
  navigation: ReactNode;
}>;

export function Layout({ children, navigation }: LayoutProps) {
  return (
    <>
      <NavigationBar navigation={navigation} />
      <div className={styles.adornment} />
      <div className={styles.content}>{children}</div>
    </>
  );
}
