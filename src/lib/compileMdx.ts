import { compileMDX as nextMdxRemoteCompileMdx } from "next-mdx-remote/rsc";

export async function compileMdx(source: string) {
  const { frontmatter, content } =
    await nextMdxRemoteCompileMdx<ArticleMetadata>({
      source,
      options: { parseFrontmatter: true },
    });

  return {
    content,
    metadata: frontmatter,
  };
}

type ArticleMetadata = {
  title: string;
};
