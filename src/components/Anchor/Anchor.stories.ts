import { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import { Anchor } from "./Anchor";

const meta: Meta<typeof Anchor> = {
  component: Anchor,
  args: {
    children: faker.lorem.words(),
    hasAdornment: false,
  },
};

export default meta;

type AnchorStoryObj = StoryObj<typeof Anchor>;

export const Default: AnchorStoryObj = {};

export const WithAdornment: AnchorStoryObj = {
  args: {
    hasAdornment: true,
  },
};
