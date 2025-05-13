"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { loadArticles } from "~/article/loadArticles";
import { ArticleCard, ArticleCardGrid } from "~/article/ArticleCard";
import { Button, ButtonIcon } from "~/components/Button";
import Plus from "~/icons/plus.svg";
import { resetAnchor } from "~/styles/utils/reset.css";

import { useArticlesList } from "./useArticlesList";
import * as styles from "./ArticlesList.css";

type ArticlesListProps = {
  articles: ReturnType<typeof loadArticles>;
};

export function ArticlesList({ articles }: ArticlesListProps) {
  const t = useTranslations();

  const { visibleArticles, showMoreArticles, isShowMoreButtonVisible } =
    useArticlesList(articles);

  return (
    <>
      <ArticleCardGrid>
        {visibleArticles.map(({ slug, metadata, readTime }) => {
          const href = `/blog/${slug}`;
          const imageSrc = `/blog/${metadata.coverImage}`;

          return (
            <Link href={href} key={slug} className={resetAnchor}>
              <ArticleCard
                imageSrc={imageSrc}
                title={metadata.title}
                publishedAt={metadata.publishedAt}
                readTime={readTime}
              />
            </Link>
          );
        })}
      </ArticleCardGrid>
      {isShowMoreButtonVisible && (
        <div className={styles.buttonWrapper}>
          <Button onPress={showMoreArticles}>
            {t("moreBlogPosts")}
            <ButtonIcon icon={Plus} />
          </Button>
        </div>
      )}
    </>
  );
}
