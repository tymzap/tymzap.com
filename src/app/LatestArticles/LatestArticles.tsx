import { loadArticles } from "~/lib/loadArticles";
import { ArticleCard } from "~/components/ArticleCard";

import { LatestArticlesHeader } from "./LatestArticlesHeader";

export async function LatestArticles() {
  const articles = getLatestArticles(await loadArticles());

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

function getLatestArticles(articles: Awaited<ReturnType<typeof loadArticles>>) {
  const articlesSortedByPublishedAtDate = articles.sort(
    (previousArticle, nextArticle) =>
      nextArticle.metadata.publishedAt.getTime() -
      previousArticle.metadata.publishedAt.getTime(),
  );

  return articlesSortedByPublishedAtDate.slice(0, LATEST_ARTICLES_COUNT);
}

const LATEST_ARTICLES_COUNT = 2;
