import { loadArticles } from "~/article/loadArticles";
import { getRandomArrayItems } from "~/lib/getRandomArrayItems";

export function getMoreArticles(articleSlugToExclude: string) {
  const articles = loadArticles();

  const articlesWithoutExcludedOne = articles.filter(
    (article) => article.slug !== articleSlugToExclude,
  );

  return getRandomArrayItems(articlesWithoutExcludedOne, MORE_ARTICLES_COUNT);
}

const MORE_ARTICLES_COUNT = 2;
