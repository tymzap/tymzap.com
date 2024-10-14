"use client";

import { useTranslations } from "next-intl";

import { loadArticles } from "~/lib/loadArticles";
import { ArticleCard } from "~/components/ArticleCard";
import { Button } from "~/components/Button";
import Plus from "~/icons/plus.svg";

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
      <ArticleCard.Grid>
        {visibleArticles.map(({ slug, metadata, readTime }) => {
          const href = `/blog/${slug}`;
          const imageSrc = `/blog/${metadata.coverImage}`;

          return (
            <ArticleCard.Link href={href} key={slug}>
              <ArticleCard
                imageSrc={imageSrc}
                title={metadata.title}
                publishedAt={metadata.publishedAt}
                readTime={readTime}
              />
            </ArticleCard.Link>
          );
        })}
      </ArticleCard.Grid>
      {isShowMoreButtonVisible && (
        <div className={styles.buttonWrapper}>
          <Button onPress={showMoreArticles}>
            {t("moreBlogPosts")}
            <Button.Icon icon={Plus} />
          </Button>
        </div>
      )}
    </>
  );
}
