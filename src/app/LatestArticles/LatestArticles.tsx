import { loadArticles } from "~/lib/loadArticles";
import { ArticleCard } from "~/components/ArticleCard";
import { Heading } from "~/components/Heading";

export async function LatestArticles() {
  const articles = getLatestArticles(await loadArticles());

  return (
    <>
      <Heading level={2}>Latest blog posts</Heading>
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

function getLatestArticles(articles: Awaited<ReturnType<typeof loadArticles>>) {
  const articlesSortedByPublishedAtDate = articles.sort(
    (previousArticle, nextArticle) =>
      previousArticle.metadata.publishedAt.getTime() -
      nextArticle.metadata.publishedAt.getTime(),
  );

  return articlesSortedByPublishedAtDate.slice(0, LATEST_ARTICLES_COUNT);
}

const LATEST_ARTICLES_COUNT = 2;
