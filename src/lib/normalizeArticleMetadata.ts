export function normalizeArticleMetadata(source: any) {
  const { title, publishedAt, image } = source;

  if (typeof title !== "string") {
    throw new Error("Invalid or missing title");
  }

  if (typeof publishedAt !== "string" || isNaN(Date.parse(publishedAt))) {
    throw new Error("Invalid or missing publishedAt date");
  }

  if (typeof image !== "string") {
    throw new Error("Invalid or missing image");
  }

  return {
    title,
    publishedAt: new Date(publishedAt),
    image,
  };
}
