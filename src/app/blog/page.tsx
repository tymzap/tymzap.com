import { ArticleCard } from "~/components/ArticleCard";

import { BlogHeader } from "./BlogHeader";
import { getArticles } from "./getArticles";

export default async function Blog() {
  const articles = getArticles();

  return (
    <>
      <BlogHeader />
      <ArticleCard.Grid>
        {articles.map(({ slug, metadata, readTime }) => {
          const href = `/blog/${slug}`;
          const imageSrc = `/blog/${metadata.coverImage}`;

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
