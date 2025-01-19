import { getTranslations } from "next-intl/server";

import { MenuLink } from "~/components/Navbar";

export async function getMenuLinks(): Promise<MenuLink[]> {
  const t = await getTranslations();

  return [
    {
      href: "/",
      label: t("home"),
    },
    {
      href: "/blog",
      label: t("blog"),
    },
  ];
}
