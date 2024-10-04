import { PropsWithChildren } from "react";

import * as styles from "./ContentWrapper.css";

type ContentWrapperProps = PropsWithChildren;

export function ContentWrapper({ children }: ContentWrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
