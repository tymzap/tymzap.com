import { PropsWithChildren } from "react";

import * as styles from "./Code.css";

type CodeProps = PropsWithChildren;

export function Code({ children }: CodeProps) {
  return <span className={styles.code}>{children}</span>;
}
