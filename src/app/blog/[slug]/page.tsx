import { loadArticleFromSlug } from "~/lib/loadArticleFromSlug";
import { LongContentWrapper } from "~/components/LongContentWrapper";

import { BlogArticleHeader } from "./BlogArticleHeader";
import { BlogArticleImage } from "./BlogArticleImage";
import { AuthorBio } from "./AuthorBio";

export { generateStaticParams } from "./generateStaticParams";

export const dynamicParams = false;

type BlogArticleProps = {
  params: {
    slug: string;
  };
};

export default async function BlogArticle({ params }: BlogArticleProps) {
  const { content, metadata, readTime } = await loadArticleFromSlug(
    params.slug,
  );

  return (
    <LongContentWrapper>
      <BlogArticleHeader publishedAt={metadata.publishedAt} readTime={readTime}>
        {metadata.title}
      </BlogArticleHeader>
      <BlogArticleImage imageSrc={`/${metadata.image}`} />
      {content}
      <AuthorBio />
    </LongContentWrapper>
  );
}
