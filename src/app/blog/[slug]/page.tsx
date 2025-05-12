import { LongContentWrapper } from "~/components/LongContentWrapper";
import { loadArticleFromSlug } from "~/article/loadArticleFromSlug";
import { renderArticle } from "~/article/renderArticle";

import { BlogArticleHeader } from "./BlogArticleHeader";
import { CoverImage } from "./CoverImage";
import { AuthorBio } from "./AuthorBio";
import { ShareButtons } from "./ShareButtons";
import { MoreArticles } from "./MoreArticles";
import { NewsletterSignUp } from "./NewsletterSignUp";

export { generateStaticParams } from "./generateStaticParams";

export { generateMetadata } from "./generateMetadata";

export const dynamicParams = false;

type BlogArticleProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogArticle({ params }: BlogArticleProps) {
  const { slug } = await params;

  const { fileContent, metadata, readTime } = loadArticleFromSlug(slug);
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
        <ShareButtons />
        <AuthorBio />
        <NewsletterSignUp isVisible={metadata.hasNewsletterSignUp} />
      </LongContentWrapper>
      <MoreArticles currentArticleSlug={slug} />
    </>
  );
}
