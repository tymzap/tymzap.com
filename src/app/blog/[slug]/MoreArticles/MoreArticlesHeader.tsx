import { useTranslations } from "next-intl";

import { Heading } from "~/components/Heading";

export function MoreArticlesHeader() {
  const t = useTranslations();

  return <Heading level={2}>{t("readNext")}</Heading>;
}
