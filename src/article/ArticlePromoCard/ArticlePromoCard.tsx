import { ReactNode } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { AttributeList, AttributeListItem } from "~/components/AttributeList";
import { TextLink, TextLinkIcon } from "~/components/TextLink";
import ArrowRight from "~/icons/arrow-right.svg";

import * as styles from "./ArticlePromoCard.css";

type ArticlePromoCardProps = {
  title: string;
  imageSrc: string;
  visitorsCount: number;
  readTime: string;
  heading: ReactNode;
  href: string;
};

export function ArticlePromoCard({
  title,
  imageSrc,
  visitorsCount,
  readTime,
  href,
  heading,
}: ArticlePromoCardProps) {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <span className={styles.heading}>{heading}</span>
      <div className={styles.content}>
        <Link href={href} className={styles.imageLink}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url("${imageSrc}")` }}
          />
        </Link>
        <div className={styles.textContent}>
          <Link href={href} className={styles.textContentLink}>
            <span className={styles.title}>{title}</span>
            <AttributeList>
              <AttributeListItem>
                {t("countReaders", { count: visitorsCount.toLocaleString() })}
              </AttributeListItem>
              <AttributeListItem>{readTime}</AttributeListItem>
            </AttributeList>
          </Link>
          <div className={styles.viewArticleLinkWrapper}>
            <TextLink href={href} hasUnderline={false}>
              {t("viewPost")}
              <TextLinkIcon icon={ArrowRight} hoverAnimation="slide-right" />
            </TextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
