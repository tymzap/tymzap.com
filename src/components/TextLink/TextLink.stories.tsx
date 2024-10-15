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

type TextLinkStoryObj = StoryObj<typeof TextLink>;

export const Default = {};

export const WithIcon: TextLinkStoryObj = {
  render: ({ children, ...restProps }) => (
    <TextLink {...restProps}>
      {children}
      <TextLink.Icon icon={ArrowRight} />
    </TextLink>
  ),
};

export const WithAnimatedIcon: TextLinkStoryObj = {
  render: ({ children, ...restProps }) => (
    <TextLink {...restProps}>
      {children}
      <TextLink.Icon icon={ArrowRight} hoverAnimation={"slide-right"} />
    </TextLink>
  ),
};

export const WithoutUnderline: TextLinkStoryObj = {
  args: {
    hasUnderline: false,
  },
};
