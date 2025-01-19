import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlugPlugin from "rehype-slug";
import { ReactNode } from "react";

import { MDX_COMPONENTS } from "~/config/mdxComponents";

export async function renderArticle(fileContent: string): Promise<ReactNode> {
  const { content: renderedContent } = await compileMDX({
    source: fileContent,
    components: MDX_COMPONENTS,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeSlugPlugin],
      },
    },
  });

  return renderedContent;
}
