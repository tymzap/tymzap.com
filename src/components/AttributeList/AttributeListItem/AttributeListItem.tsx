import { PropsWithChildren } from "react";

import * as styles from "./AttributeListItem.css";

type AttributeListItemProps = PropsWithChildren;

export function AttributeListItem({ children }: AttributeListItemProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
