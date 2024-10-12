import path from "node:path";
import fs from "node:fs";

import { loadArticleFromSlug } from "~/lib/loadArticleFromSlug";

export function loadArticles() {
  const articlesDirectory = path.resolve("./content/articles");
  const articleFilenames = fs.readdirSync(articlesDirectory);

  return articleFilenames.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const { fileContent, readTime, metadata } = loadArticleFromSlug(slug);

    return {
      slug,
      fileContent,
      readTime,
      metadata,
    };
  });
}
