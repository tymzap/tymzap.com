import { ArticleCard } from "~/components/ArticleCard";

import { LatestArticlesHeader } from "./LatestArticlesHeader";
import { getLatestArticles } from "./getLatestArticles";

export function LatestArticles() {
  const articles = getLatestArticles();

  return (
    <>
      <LatestArticlesHeader />
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
    </>
  );
}
