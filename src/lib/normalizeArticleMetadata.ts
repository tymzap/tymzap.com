export function normalizeArticleMetadata(source: any) {
  const { title, publishedAt, coverImage } = source;

  if (typeof title !== "string") {
    throw new Error("Invalid or missing title");
  }

  if (typeof publishedAt !== "string" || isNaN(Date.parse(publishedAt))) {
    throw new Error("Invalid or missing publishedAt date");
  }

  if (typeof coverImage !== "string") {
    throw new Error("Invalid or missing image");
  }

  return {
    title,
    publishedAt: new Date(publishedAt),
    coverImage,
  };
}
