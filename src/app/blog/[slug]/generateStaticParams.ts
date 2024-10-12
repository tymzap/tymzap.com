import path from "node:path";
import fs from "node:fs";

export function generateStaticParams() {
  const articlesDirectory = path.resolve("./content/articles");

  const articleFilenames = fs
    .readdirSync(articlesDirectory)
    .map((filename) => filename.replace(".mdx", ""));

  return articleFilenames.map((filename) => ({
    slug: filename,
  }));
}
