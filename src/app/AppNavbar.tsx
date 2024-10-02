"use client";

import { MenuLink, Navbar, SocialMediaLink } from "~/components/Navbar";
import { SOCIAL_MEDIA_URLS } from "~/constants/socialMedia";
import X from "~/icons/x.svg";
import LinkedIn from "~/icons/linkedin.svg";
import ProductHunt from "~/icons/product-hunt.svg";
import GitHub from "~/icons/github.svg";

export function AppNavbar() {
  return (
    <Navbar menuLinks={MENU_LINKS} socialMediaLinks={SOCIAL_MEDIA_LINKS} />
  );
}

const MENU_LINKS: MenuLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    href: SOCIAL_MEDIA_URLS.X,
    label: "X",
    icon: X,
  },
  {
    href: SOCIAL_MEDIA_URLS.LINKED_IN,
    label: "LinkedIn",
    icon: LinkedIn,
  },
  {
    href: SOCIAL_MEDIA_URLS.PRODUCT_HUNT,
    label: "Product Hunt",
    icon: ProductHunt,
  },
  {
    href: SOCIAL_MEDIA_URLS.GITHUB,
    label: "GitHub",
    icon: GitHub,
  },
];
