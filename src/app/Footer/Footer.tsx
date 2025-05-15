"use client";

import { useTranslations } from "next-intl";

import { Footer as BaseFooter } from "~/components/Footer";
import { EVENTS } from "~/analytics/events";
import { useAnalytics } from "~/analytics/useAnalytics";
import { TextLink, TextLinkIcon } from "~/components/TextLink";
import Code from "~/icons/code.svg";

import { ContactLinks } from "../ContactLinks";
import * as styles from "./Footer.css";

export function Footer() {
  const t = useTranslations();

  const { trackEvent } = useAnalytics();

  const handlePressRepositoryLink = () => {
    trackEvent(EVENTS.CLICK_WEBSITE_SOURCE_CODE_LINK);
  };

  return (
    <BaseFooter
      topText={
        <>
          © <span className={styles.name}>Tymek Zapała</span> — {CURRENT_YEAR}.{" "}
          {t("allRightsReserved")}
        </>
      }
      bottomText={
        <TextLink href={REPOSITORY_URL} onPress={handlePressRepositoryLink}>
          {t("viewThisWebsiteSourceCode")}
          <TextLinkIcon icon={Code} hoverAnimation={"rotate"} />
        </TextLink>
      }
      contactLinks={<ContactLinks />}
    />
  );
}

const CURRENT_YEAR = new Date().getFullYear();

const REPOSITORY_URL = "https://github.com/tymzap/tymzap.com";
