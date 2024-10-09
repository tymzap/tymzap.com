import { loadArticleFromSlug } from "~/lib/loadArticleFromSlug";
import { LongContentWrapper } from "~/components/LongContentWrapper";

import { BlogArticleHeader } from "./BlogArticleHeader";
import { BlogArticleImage } from "./BlogArticleImage";
import { AuthorBio } from "./AuthorBio";
import { generateStaticParams } from "./generateStaticParams";

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

export const dynamicParams = false;
