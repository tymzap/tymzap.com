import { ReactNode } from "react";
import { useTranslations } from "next-intl";

import * as styles from "./Footer.css";

type FooterProps = {
  contactLinks: ReactNode;
};

export function Footer({ contactLinks }: FooterProps) {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <span className={styles.text}>
          © <span className={styles.name}>Tymek Zapała</span> — 2024.{" "}
          {t("allRightsReserved")}
        </span>
        <div className={styles.contactLinksWrapper}>{contactLinks}</div>
      </div>
    </div>
  );
}
