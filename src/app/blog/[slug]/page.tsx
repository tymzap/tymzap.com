import path from "node:path";
import fs from "node:fs";

import { loadArticleFromSlug } from "~/lib/loadArticleFromSlug";
import { compileMdx } from "~/lib/compileMdx";
import { Heading } from "~/components/Heading";

type BlogArticleProps = {
  params: {
    slug: string;
  };
};

export default async function BlogArticle({ params }: BlogArticleProps) {
  const article = loadArticleFromSlug(params.slug);

  const { metadata, content } = await compileMdx(article);

  return (
    <div>
      <Heading level={1}>{metadata.title}</Heading>
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
