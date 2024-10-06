import { PropsWithChildren } from "react";

import * as styles from "./LongContentWrapper.css";

type LongContentWrapperProps = PropsWithChildren;

export function LongContentWrapper({ children }: LongContentWrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
