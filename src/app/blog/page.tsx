import { loadArticles } from "~/lib/loadArticles";
import { ArticleCard } from "~/components/ArticleCard";

import { BlogHeader } from "./BlogHeader";

export default async function Blog() {
  const articles = sortArticlesByPublishedAtDate(await loadArticles());

  return (
    <>
      <BlogHeader />
      <ArticleCard.Grid>
        {articles.map(({ slug, metadata, readTime }) => {
          const href = `/blog/${slug}`;
          const imageSrc = `/${metadata.image}`;

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

function sortArticlesByPublishedAtDate(
  articles: Awaited<ReturnType<typeof loadArticles>>,
) {
  return articles.sort(
    (previousArticle, nextArticle) =>
      previousArticle.metadata.publishedAt.getTime() -
      nextArticle.metadata.publishedAt.getTime(),
  );
}
