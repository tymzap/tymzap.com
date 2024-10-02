import { Meta } from "@storybook/react";

import { SOCIAL_MEDIA_URLS } from "~/constants/socialMedia";
import X from "~/icons/x.svg";
import LinkedIn from "~/icons/linkedin.svg";
import ProductHunt from "~/icons/product-hunt.svg";
import GitHub from "~/icons/github.svg";

import { Navbar } from "./Navbar";
import { MenuLink } from "./MenuLink";
import { SocialMediaLink } from "./SocialMediaLink";

const menuLinks: MenuLink[] = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "Blog",
  },
  {
    href: "#",
    label: "About",
  },
];

const socialMediaLinks: SocialMediaLink[] = [
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

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  args: {
    socialMediaLinks,
    menuLinks,
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {};
