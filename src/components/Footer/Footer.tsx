import { ReactNode } from "react";
import { useTranslations } from "next-intl";

import * as styles from "./Footer.css";

type FooterProps = {
  socialMediaLinks: ReactNode;
};

export function Footer({ socialMediaLinks }: FooterProps) {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <span className={styles.text}>
          © <span className={styles.name}>Tymek Zapała</span> — 2024.{" "}
          {t("allRightsReserved")}
        </span>
        <div className={styles.socialMediaLinksWrapper}>{socialMediaLinks}</div>
      </div>
    </div>
  );
}
