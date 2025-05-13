import { ReactNode } from "react";
import { useTranslations } from "next-intl";

import { ThemeOverride } from "~/theme/ThemeOverride";
import { TextLink, TextLinkIcon } from "~/components/TextLink";
import Code from "~/icons/code.svg";

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
          <div className={styles.repoLinkWrapper}>
            <TextLink href={REPO_URL}>
              {t("viewThisWebsiteSourceCode")}
              <TextLinkIcon icon={Code} hoverAnimation={"rotate"} />
            </TextLink>
          </div>
        </div>
      </div>
    </ThemeOverride>
  );
}

const CURRENT_YEAR = new Date().getFullYear();

const REPO_URL = "https://github.com/tymzap/tymzap.com";
