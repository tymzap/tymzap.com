import { Metadata } from "next";

import { getApiToken } from "~/lib/getApiToken";
import { loadArticleFromSlug } from "~/lib/loadArticleFromSlug";

type GenerateMetadataParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: GenerateMetadataParams): Promise<Metadata> {
  const {
    metadata: { title },
  } = loadArticleFromSlug(params.slug);

  const token = getApiToken({ title });

  const imageSrc = `/api/og?title=${encodeURIComponent(title)}&token=${token}`;

  return {
    twitter: {
      images: [imageSrc],
    },
  };
}
