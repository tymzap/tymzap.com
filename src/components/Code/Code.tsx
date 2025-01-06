import { PropsWithChildren } from "react";

import * as styles from "./Code.css";

type CodeProps = PropsWithChildren;

export function Code({ children }: CodeProps) {
  return <code className={styles.code}>{children}</code>;
}
