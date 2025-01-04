import { LongContentWrapper } from "~/components/LongContentWrapper";
import { loadArticleFromSlug } from "~/lib/loadArticleFromSlug";
import { renderArticle } from "~/lib/renderArticle";

import { BlogArticleHeader } from "./BlogArticleHeader";
import { CoverImage } from "./CoverImage";
import { AuthorBio } from "./AuthorBio";
import { MoreArticles } from "./MoreArticles";
import { NewsletterSignUp } from "./NewsletterSignUp";

export { generateStaticParams } from "./generateStaticParams";

export { generateMetadata } from "./generateMetadata";

export const dynamicParams = false;

type BlogArticleProps = {
  params: {
    slug: string;
  };
};

export default async function BlogArticle({ params }: BlogArticleProps) {
  const { fileContent, metadata, readTime } = loadArticleFromSlug(params.slug);
  const content = await renderArticle(fileContent);

  const coverImageSrc = `/blog/${metadata.coverImage}`;

  return (
    <>
      <LongContentWrapper>
        <BlogArticleHeader
          publishedAt={metadata.publishedAt}
          readTime={readTime}
        >
          {metadata.title}
        </BlogArticleHeader>
        <CoverImage imageSrc={coverImageSrc} />
        {content}
        <AuthorBio />
        <NewsletterSignUp isVisible={metadata.hasNewsletterSignUp} />
      </LongContentWrapper>
      <MoreArticles currentArticleSlug={params.slug} />
    </>
  );
}
