import { PropsWithChildren } from "react";

import * as styles from "./BlogArticleHeading.css";

type BlogArticleHeadingProps = PropsWithChildren;

export function BlogArticleHeading({ children }: BlogArticleHeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
