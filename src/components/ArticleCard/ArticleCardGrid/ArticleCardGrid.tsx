import { PropsWithChildren } from "react";

import * as styles from "./ArticleCardGrid.css";

type ArticleCardGridProps = PropsWithChildren;

export function ArticleCardGrid({ children }: ArticleCardGridProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
