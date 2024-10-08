import path from "node:path";
import fs from "node:fs";

import { loadArticleFromSlug } from "~/lib/loadArticleFromSlug";
import { LongContentWrapper } from "~/components/LongContentWrapper";

import { BlogArticleHeader } from "./BlogArticleHeader";
import { BlogArticleImage } from "./BlogArticleImage";
import { AuthorBio } from "./AuthorBio";

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

export function generateStaticParams() {
  const articlesDirectory = path.resolve("./content");

  const articleFilenames = fs
    .readdirSync(articlesDirectory)
    .map((filename) => filename.replace(".mdx", ""));

  return articleFilenames.map((filename) => ({
    slug: filename,
  }));
}

export const dynamicParams = false;
