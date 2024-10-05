import path from "node:path";
import fs from "node:fs";

import { loadArticleFromSlug } from "~/lib/loadArticleFromSlug";

import { BlogArticleHeading } from "./BlogArticleHeading";
import { BlogArticleImage } from "./BlogArticleImage";

type BlogArticleProps = {
  params: {
    slug: string;
  };
};

export default async function BlogArticle({ params }: BlogArticleProps) {
  const { content, metadata } = await loadArticleFromSlug(params.slug);

  return (
    <div>
      <BlogArticleHeading>{metadata.title}</BlogArticleHeading>
      <BlogArticleImage imageSrc={`/${metadata.image}`} />
      {content}
    </div>
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
