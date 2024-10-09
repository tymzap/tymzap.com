import { compileMDX as nextMdxRemoteCompileMdx } from "next-mdx-remote/rsc";
import readingTime from "reading-time";

import { normalizeArticleMetadata } from "~/lib/normalizeArticleMetadata";
import { MDX_COMPONENTS } from "~/config/mdxComponents";

export async function compileMdx(source: string) {
  const { frontmatter, content } = await nextMdxRemoteCompileMdx({
    source,
    components: MDX_COMPONENTS,
    options: { parseFrontmatter: true },
  });

  return {
    content,
    metadata: normalizeArticleMetadata(frontmatter),
    readTime: readingTime(source).text,
  };
}
