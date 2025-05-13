import { format as formatDate } from "date-fns";

import { AttributeList, AttributeListItem } from "~/components/AttributeList";

import * as styles from "./ArticleCard.css";

type ArticleCardProps = {
  imageSrc: string;
  title: string;
  publishedAt: Date;
  readTime: string;
};

export function ArticleCard({
  imageSrc,
  title,
  publishedAt,
  readTime,
}: ArticleCardProps) {
  const formattedPublishedAt = formatDate(publishedAt, "PPP");

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url("${imageSrc}")` }}
      />
      <span className={styles.title}>{title}</span>
      <AttributeList>
        <AttributeListItem>{formattedPublishedAt}</AttributeListItem>
        <AttributeListItem>{readTime}</AttributeListItem>
      </AttributeList>
    </div>
  );
}
