import fs from "node:fs";
import path from "node:path";

import { compileMdx } from "~/lib/compileMdx";

export async function loadArticleFromSlug(slug: string) {
  const articleFile = fs.readFileSync(path.resolve("./content", `${slug}.mdx`));

  return await compileMdx(articleFile.toString());
}
