import { compileMDX as baseCompileMdx } from "next-mdx-remote/rsc";
import readingTime from "reading-time";
import rehypeSlugPlugin from "rehype-slug";

import { normalizeArticleMetadata } from "~/lib/normalizeArticleMetadata";
import { MDX_COMPONENTS } from "~/config/mdxComponents";

export async function compileMdx(source: string) {
  const { frontmatter, content } = await baseCompileMdx({
    source,
    components: MDX_COMPONENTS,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeSlugPlugin],
      },
    },
  });

  return {
    content,
    metadata: normalizeArticleMetadata(frontmatter),
    readTime: readingTime(source).text,
  };
}
