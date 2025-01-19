import { ArticleCard } from "~/article/ArticleCard";

import { getMoreArticles } from "./getMoreArticles";
import { MoreArticlesHeader } from "./MoreArticlesHeader";
import * as styles from "./MoreArticles.css";

type MoreArticlesProps = {
  currentArticleSlug: string;
};

export async function MoreArticles({ currentArticleSlug }: MoreArticlesProps) {
  const articles = getMoreArticles(currentArticleSlug);

  return (
    <div className={styles.wrapper}>
      <MoreArticlesHeader />
      <ArticleCard.Grid>
        {articles.map(({ slug, metadata, readTime }) => {
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
    </div>
  );
}
