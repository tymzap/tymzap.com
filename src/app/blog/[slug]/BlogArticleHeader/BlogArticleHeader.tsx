import { PropsWithChildren } from "react";
import { format as formatDate } from "date-fns/format";

import { AttributeList } from "~/components/AttributeList";

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
  const formattedPublishedAt = formatDate(publishedAt, DATE_FORMAT);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{children}</h2>
      <AttributeList>
        <AttributeList.Item>{formattedPublishedAt}</AttributeList.Item>
        <AttributeList.Item>{readTime}</AttributeList.Item>
      </AttributeList>
    </div>
  );
}

const DATE_FORMAT = "MMMM dd, yyyy";
