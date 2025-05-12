import { loadArticles } from "~/article/loadArticles";

import { BlogHeader } from "./BlogHeader";
import { ArticlesList } from "./ArticlesList";
import { PopularArticle } from "./PopularArticle";

export { generateMetadata } from "./generateMetadata";

export default async function Blog() {
  const articles = getArticles();

  return (
    <>
      <BlogHeader />
      <PopularArticle />
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
