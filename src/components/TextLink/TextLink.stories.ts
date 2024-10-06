import { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import ArrowRight from "~/icons/arrow-right.svg";

import { TextLink } from "./TextLink";

const meta: Meta<typeof TextLink> = {
  component: TextLink,
  args: {
    children: faker.lorem.words(),
    href: "#",
  },
};

export default meta;

export const Default = {};

export const WithLink: StoryObj<typeof ArrowRight> = {
  args: {
    icon: ArrowRight,
  },
};
