import path from "node:path";
import fs from "node:fs";
import Image from "next/image";

import { loadArticleFromSlug } from "~/lib/loadArticleFromSlug";
import { Heading } from "~/components/Heading";

import { ArticleImage } from "./ArticleImage";

type BlogArticleProps = {
  params: {
    slug: string;
  };
};

export default async function BlogArticle({ params }: BlogArticleProps) {
  const { content, metadata } = await loadArticleFromSlug(params.slug);

  return (
    <div>
      <Heading level={1}>{metadata.title}</Heading>
      <ArticleImage imageSrc={`/${metadata.image}`} />
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
