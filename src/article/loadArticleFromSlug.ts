import fs from "node:fs";
import path from "node:path";
import grayMatter from "gray-matter";
import readingTime from "reading-time";

import { normalizeArticleMetadata } from "~/article/normalizeArticleMetadata";

export function loadArticleFromSlug(slug: string) {
  const articleFile = fs.readFileSync(
    path.resolve("./content/articles", `${slug}.mdx`),
  );
  const fileContent = articleFile.toString();

  const { data: metadata } = grayMatter(fileContent);
  const readTime = readingTime(fileContent).text;

  return {
    metadata: normalizeArticleMetadata(metadata),
    readTime,
    fileContent,
  };
}
