import path from "node:path";
import fs from "node:fs";

import { compileMdx } from "~/lib/compileMdx";

export async function loadArticles() {
  const articlesDirectory = path.resolve("./content/articles");
  const articleFilenames = fs.readdirSync(articlesDirectory);

  return Promise.all(
    articleFilenames.map(async (filename) => {
      const slug = filename.replace(".mdx", "");
      const file = fs.readFileSync(path.resolve(articlesDirectory, filename));

      const compiledMdx = await compileMdx(file.toString());

      return {
        slug,
        ...compiledMdx,
      };
    }),
  );
}
