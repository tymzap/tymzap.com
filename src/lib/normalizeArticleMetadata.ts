export function normalizeArticleMetadata(source: any) {
  const publishedAt: Date =
    typeof source.publishedAt === "string"
      ? new Date(source.publishedAt)
      : source.publishedAt;

  return {
    title: source.title,
    coverImage: source.coverImage,
    hasNewsletterSignUp: source.hasNewsletterSignUp ?? false,
    publishedAt,
  };
}
