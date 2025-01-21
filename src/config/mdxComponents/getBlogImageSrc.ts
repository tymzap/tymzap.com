export function getBlogImageSrc(initialSrc?: string) {
  if (!initialSrc) {
    return "";
  }

  return `/blog/${initialSrc}`;
}
