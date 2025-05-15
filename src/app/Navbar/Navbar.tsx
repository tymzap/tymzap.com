import { getTranslations } from "next-intl/server";

import { Navbar as BaseNavbar, MenuLink } from "~/components/Navbar";

import { ContactLinks } from "../ContactLinks";

export async function Navbar() {
  const menuLinks = await getMenuLinks();

  return (
    <BaseNavbar
      menuLinks={menuLinks}
      contactLinks={<ContactLinks iconSize={ICON_SIZE} />}
    />
  );
}

async function getMenuLinks(): Promise<MenuLink[]> {
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

const ICON_SIZE = 40;
