import Link from "next/link";

import { ArticleCard } from "~/article/ArticleCard";
import { resetAnchor } from "~/styles/utils/reset.css";

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
    </>
  );
}
