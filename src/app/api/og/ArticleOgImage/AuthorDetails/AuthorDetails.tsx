import * as styles from "./AuthorDetails.css";

type AuthorDetailsProps = {
  profileImageSrc: string;
};

export function AuthorDetails({ profileImageSrc }: AuthorDetailsProps) {
  return (
    <div style={styles.wrapper}>
      <img src={profileImageSrc} style={styles.image} />
      <div style={styles.textWrapper}>
        <span style={styles.name}>Tymek Zapała</span>
        <span style={styles.address}>tymzap.com</span>
      </div>
    </div>
  );
}
