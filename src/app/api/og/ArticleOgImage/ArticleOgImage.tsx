import * as styles from "./ArticleOgImage.css";
import { AuthorDetails } from "./AuthorDetails";

type ArticleOgImageProps = {
  title: string | null;
  profileImageSrc: string;
};

export function ArticleOgImage({
  title,
  profileImageSrc,
}: ArticleOgImageProps) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.contentWrapper}>
        <span style={styles.title}>{title}</span>
        <AuthorDetails profileImageSrc={profileImageSrc} />
      </div>
    </div>
  );
}
