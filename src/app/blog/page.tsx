import { loadArticles } from "~/lib/loadArticles";

import { BlogHeader } from "./BlogHeader";
import { ArticlesList } from "./ArticlesList";

export default async function Blog() {
  const articles = getArticles();

  return (
    <>
      <BlogHeader />
      <ArticlesList articles={articles} />
    </>
  );
}

function getArticles() {
  const articles = loadArticles();

  const articlesSortedByPublishedAt = articles.sort(
    (previousArticle, nextArticle) =>
      nextArticle.metadata.publishedAt.getTime() -
      previousArticle.metadata.publishedAt.getTime(),
  );

  return articlesSortedByPublishedAt;
}
