import { loadArticles } from "~/lib/loadArticles";

export function getArticles() {
  const articles = loadArticles();

  const articlesSortedByPublishedAt = articles.sort(
    (previousArticle, nextArticle) =>
      nextArticle.metadata.publishedAt.getTime() -
      previousArticle.metadata.publishedAt.getTime(),
  );

  return articlesSortedByPublishedAt;
}
