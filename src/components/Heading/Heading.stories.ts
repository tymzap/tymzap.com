import { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
};

export default meta;

type HeadingStoryObj = StoryObj<typeof Heading>;

export const Level2: HeadingStoryObj = {
  args: {
    level: 2,
    children: faker.lorem.words(5),
  },
};

export const Level3: HeadingStoryObj = {
  args: {
    level: 3,
    children: faker.lorem.words(5),
  },
};

export const Level4: HeadingStoryObj = {
  args: {
    level: 4,
    children: faker.lorem.words(5),
  },
};

export const Level5: HeadingStoryObj = {
  args: {
    level: 5,
    children: faker.lorem.words(5),
  },
};
