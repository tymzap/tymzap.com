import Link from "next/link";

import * as styles from "./Logo.css";

export function Logo() {
  return (
    <Link href={HOME_URL} className={styles.link}>
      <h1 className={styles.logo}>Tymek Zapała</h1>
    </Link>
  );
}

const HOME_URL = "/";
