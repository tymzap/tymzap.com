import { loadArticleFromSlug } from "~/lib/loadArticleFromSlug";
import { LongContentWrapper } from "~/components/LongContentWrapper";

import { BlogArticleHeader } from "./BlogArticleHeader";
import { CoverImage } from "./CoverImage";
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

  const coverImageSrc = `/blog/${metadata.coverImage}`;

  return (
    <LongContentWrapper>
      <BlogArticleHeader publishedAt={metadata.publishedAt} readTime={readTime}>
        {metadata.title}
      </BlogArticleHeader>
      <CoverImage imageSrc={coverImageSrc} />
      {content}
      <AuthorBio />
    </LongContentWrapper>
  );
}
