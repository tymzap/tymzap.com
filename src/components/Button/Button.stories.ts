import { Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: faker.lorem.words(3),
    onPress: fn(),
  },
};

export default meta;

export const Default = {};
