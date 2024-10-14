import { loadArticles } from "~/lib/loadArticles";

export function getLatestArticles() {
  const articles = loadArticles();

  const articlesSortedByPublishedAtDate = articles.sort(
    (previousArticle, nextArticle) =>
      nextArticle.metadata.publishedAt.getTime() -
      previousArticle.metadata.publishedAt.getTime(),
  );

  return articlesSortedByPublishedAtDate.slice(0, LATEST_ARTICLES_COUNT);
}

const LATEST_ARTICLES_COUNT = 2;
