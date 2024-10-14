import { Meta } from "@storybook/react";

import { Navbar } from "./Navbar";
import { MenuLink } from "./MenuLink";

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

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  args: {
    contactLinks: null,
    menuLinks,
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {};
