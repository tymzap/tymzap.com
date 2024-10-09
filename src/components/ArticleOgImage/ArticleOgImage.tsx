import * as styles from "./ArticleOgImage.css";
import { AuthorDetails } from "./AuthorDetails";

type ArticleOgImageProps = {
  title: string;
};

export function ArticleOgImage({ title }: ArticleOgImageProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <span className={styles.title}>{title}</span>
        <AuthorDetails />
      </div>
    </div>
  );
}
