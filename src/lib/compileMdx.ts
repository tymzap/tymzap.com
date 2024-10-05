import { compileMDX as nextMdxRemoteCompileMdx } from "next-mdx-remote/rsc";
import readingTime from "reading-time";

import { normalizeArticleMetadata } from "~/lib/normalizeArticleMetadata";

export async function compileMdx(source: string) {
  const { frontmatter, content } = await nextMdxRemoteCompileMdx({
    source,
    options: { parseFrontmatter: true },
  });

  const readTime = Math.ceil(readingTime(source).minutes);

  return {
    content,
    metadata: normalizeArticleMetadata(frontmatter),
    readTime,
  };
}
