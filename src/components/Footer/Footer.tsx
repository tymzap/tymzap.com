import { ReactNode } from "react";

import * as styles from "./Footer.css";

type FooterProps = {
  socialMediaLinks: ReactNode;
};

export function Footer({ socialMediaLinks }: FooterProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <span className={styles.text}>
          © <span className={styles.name}>Tymek Zapała</span> — 2024. All
          rights reserved.
        </span>
        <div className={styles.socialMediaLinksWrapper}>{socialMediaLinks}</div>
      </div>
    </div>
  );
}
