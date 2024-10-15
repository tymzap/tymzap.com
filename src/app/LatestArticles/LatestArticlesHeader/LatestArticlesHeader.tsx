import { useTranslations } from "next-intl";

import { Heading } from "~/components/Heading";
import { TextLink } from "~/components/TextLink";
import ArrowRight from "~/icons/arrow-right.svg";

import * as styles from "./LatestArticlesHeader.css";

export function LatestArticlesHeader() {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <Heading level={2}>{t("recentBlogPosts")}</Heading>
      <TextLink href={"/blog"} hasUnderline={false}>
        {t("seeAllPosts")}
        <TextLink.Icon icon={ArrowRight} hoverAnimation={"slide-right"} />
      </TextLink>
    </div>
  );
}
