import { notFound } from "next/navigation";

import { newsletterFlag } from "~/newsletter/newsletterFlag";

export default async function Newsletter() {
  const isNewsletterEnabled = await newsletterFlag();

  if (!isNewsletterEnabled) {
    notFound();
  }

  return null;
}
