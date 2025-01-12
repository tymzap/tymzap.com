import { ReactNode } from "react";
import { useTranslations } from "next-intl";

import { ThemeOverride } from "~/theme/ThemeOverride";

import * as styles from "./Footer.css";

type FooterProps = {
  contactLinks: ReactNode;
};

export function Footer({ contactLinks }: FooterProps) {
  const t = useTranslations();

  return (
    <ThemeOverride theme={"dark"}>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <span className={styles.text}>
            © <span className={styles.name}>Tymek Zapała</span> —{" "}
            {CURRENT_YEAR}. {t("allRightsReserved")}
          </span>
          <div className={styles.contactLinksWrapper}>{contactLinks}</div>
        </div>
      </div>
    </ThemeOverride>
  );
}

const CURRENT_YEAR = new Date().getFullYear();
