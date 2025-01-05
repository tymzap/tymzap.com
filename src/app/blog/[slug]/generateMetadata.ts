import { Metadata } from "next";

import { getApiToken } from "~/lib/getApiToken";
import { loadArticleFromSlug } from "~/lib/loadArticleFromSlug";

type GenerateMetadataParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: GenerateMetadataParams): Promise<Metadata> {
  const { slug } = await params;

  const {
    metadata: { title },
  } = loadArticleFromSlug(slug);

  const token = getApiToken({ title });

  const imageSrc = `/api/og?title=${encodeURIComponent(title)}&token=${token}`;

  return {
    title,
    twitter: {
      images: [imageSrc],
    },
    openGraph: {
      images: [imageSrc],
    },
  };
}
