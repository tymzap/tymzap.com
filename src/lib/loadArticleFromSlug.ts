import fs from "node:fs";
import path from "node:path";

export function loadArticleFromSlug(slug: string) {
  const articleFile = fs.readFileSync(path.resolve("./content", `${slug}.mdx`));

  return articleFile.toString();
}
