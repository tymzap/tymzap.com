import { useState } from "react";

import { loadArticles } from "~/article/loadArticles";

export function useArticlesList(articles: ReturnType<typeof loadArticles>) {
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE_COUNT);

  const showMoreArticles = () => {
    setVisibleCount((previousValue) => previousValue + ARTICLES_PER_PAGE_COUNT);
  };

  const visibleArticles = articles.slice(0, visibleCount);

  const isShowMoreButtonVisible = visibleCount < articles.length;

  return {
    visibleArticles,
    showMoreArticles,
    isShowMoreButtonVisible,
  };
}

const ARTICLES_PER_PAGE_COUNT = 6;
