import { PropsWithChildren } from "react";
import { format as formatDate } from "date-fns/format";

import { AttributeList, AttributeListItem } from "~/components/AttributeList";

import * as styles from "./BlogArticleHeader.css";

type BlogArticleHeaderProps = PropsWithChildren<{
  publishedAt: Date;
  readTime: string;
}>;

export function BlogArticleHeader({
  children,
  publishedAt,
  readTime,
}: BlogArticleHeaderProps) {
  const formattedPublishedAt = formatDate(publishedAt, "PPP");

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{children}</h2>
      <AttributeList>
        <AttributeListItem>{formattedPublishedAt}</AttributeListItem>
        <AttributeListItem>{readTime}</AttributeListItem>
      </AttributeList>
    </div>
  );
}
