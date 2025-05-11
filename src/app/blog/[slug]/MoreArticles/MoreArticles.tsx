import Link from "next/link";

import { ArticleCard } from "~/article/ArticleCard";
import { resetAnchor } from "~/styles/utils/reset.css";

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
      </ArticleCard.Grid>
    </div>
  );
}
