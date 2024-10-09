import * as styles from "./AuthorDetails.css";

export function AuthorDetails() {
  return (
    <div className={styles.wrapper}>
      <img src={"/profile.png"} className={styles.image} />
      <div className={styles.textWrapper}>
        <span className={styles.name}>Tymek Zapała</span>
        <span className={styles.address}>tymzap.com</span>
      </div>
    </div>
  );
}
