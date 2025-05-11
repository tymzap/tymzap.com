import * as yup from "yup";

import { ArticleMetadata } from "./ArticleMetadata";

export function normalizeArticleMetadata(source: unknown): ArticleMetadata {
  return SCHEMA.cast(source);
}

const SCHEMA = yup.object({
  title: yup.string().required(),
  coverImage: yup.string().required(),
  hasNewsletterSignUp: yup.boolean().default(false),
  publishedAt: yup
    .date()
    .transform((value) => (typeof value === "string" ? new Date(value) : value))
    .required(),
});
