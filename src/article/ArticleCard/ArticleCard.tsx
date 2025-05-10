import { format as formatDate } from "date-fns";

import { AttributeList } from "~/components/AttributeList";

import * as styles from "./ArticleCard.css";
import { ArticleCardGrid } from "./ArticleCardGrid";
import { ArticleCardLink } from "./ArticleCardLink";

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
        <AttributeList.Item>{formattedPublishedAt}</AttributeList.Item>
        <AttributeList.Item>{readTime}</AttributeList.Item>
      </AttributeList>
    </div>
  );
}

ArticleCard.Grid = ArticleCardGrid;
ArticleCard.Link = ArticleCardLink;
