import { getTranslations } from "next-intl/server";

import { ArticlePromoCard } from "~/article/ArticlePromoCard";
import { getTopPageByVisitors } from "~/analytics/getTopPageByVisitors";
import { loadArticleFromSlug } from "~/article/loadArticleFromSlug";

import * as styles from "./PopularArticle.css";

export async function PopularArticle() {
  const t = await getTranslations();

  const result = await getTopPageByVisitors();

  if (result.status === "error") {
    console.error(result.error);

    return null;
  }

  const slug = result.data.pageUrl.replace("/blog/", "");

  const article = loadArticleFromSlug(slug);

  return (
    <div className={styles.wrapper}>
      <ArticlePromoCard
        title={article.metadata.title}
        imageSrc={`/blog/${article.metadata.coverImage}`}
        readTime={article.readTime}
        visitorsCount={result.data.visitorsCount}
        heading={t("popularPost")}
        href={`/blog/${slug}`}
      />
    </div>
  );
}
