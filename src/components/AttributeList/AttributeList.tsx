import { PropsWithChildren } from "react";

import { AttributeListItem } from "./AttributeListItem";
import * as styles from "./AttributeList.css";

type AttributeListProps = PropsWithChildren;

export function AttributeList({ children }: AttributeListProps) {
  return <div className={styles.wrapper}>{children}</div>;
}

AttributeList.Item = AttributeListItem;
