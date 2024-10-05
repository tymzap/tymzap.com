import { PropsWithChildren } from "react";
import { format as formatDate } from "date-fns/format";

import * as styles from "./BlogArticleHeader.css";

type BlogArticleHeaderProps = PropsWithChildren<{
  publishedAt: Date;
  readTime: number;
}>;

export function BlogArticleHeader({
  children,
  publishedAt,
  readTime,
}: BlogArticleHeaderProps) {
  const formattedPublishedAt = formatDate(publishedAt, DATE_FORMAT);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{children}</h1>
      <div className={styles.details}>
        <span className={styles.detailsItem}>{formattedPublishedAt}</span>•
        <span className={styles.detailsItem}>{readTime} minutes read</span>
      </div>
    </div>
  );
}

const DATE_FORMAT = "MMMM dd, yyyy";
