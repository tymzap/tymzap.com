import { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;

export const Default: StoryObj<typeof Text> = {
  args: {
    children: faker.lorem.sentences(3),
  },
};
