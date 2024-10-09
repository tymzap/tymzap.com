import { useTranslations } from "next-intl";

import { Heading } from "~/components/Heading";

export function BlogHeader() {
  const t = useTranslations();

  return <Heading level={2}>{t("blog")}</Heading>;
}
