import { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { fn } from "@storybook/test";

import Plus from "~/icons/plus.svg";

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

export const WithIcon: StoryObj<typeof Button> = {
  render: ({ children, ...restProps }) => (
    <Button {...restProps}>
      {children}
      <Button.Icon icon={Plus} />
    </Button>
  ),
};
