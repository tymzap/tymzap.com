import { format as formatDate } from "date-fns";

import * as styles from "./ArticleCard.css";
import { ArticleCardGrid } from "./ArticleCardGrid";

type ArticleCardProps = {
  imageSrc: string;
  title: string;
  createdAt: Date;
  readTime: number;
};

export function ArticleCard({
  imageSrc,
  title,
  createdAt,
  readTime,
}: ArticleCardProps) {
  const formattedDate = formatDate(createdAt, DATE_FORMAT);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url("${imageSrc}")` }}
      />
      <span className={styles.title}>{title}</span>
      <div className={styles.details}>
        <span className={styles.detailsItem}>{formattedDate}</span>•
        <span className={styles.detailsItem}>{readTime} minutes read</span>
      </div>
    </div>
  );
}

const DATE_FORMAT = "MMMM dd, yyyy";

ArticleCard.Grid = ArticleCardGrid;