import { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { fn } from "@storybook/test";

import Plus from "~/icons/plus.svg";

import { Button } from "./Button";
import { ButtonIcon } from "./ButtonIcon";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: faker.lorem.words(3),
    onPress: fn(),
    isLoading: false,
    size: "medium",
    variant: "primary",
  },
};

export default meta;

type ButtonStoryObj = StoryObj<typeof Button>;

export const Default = {};

export const WithIcon: ButtonStoryObj = {
  render: ({ children, ...restProps }) => (
    <Button {...restProps}>
      {children}
      <ButtonIcon icon={Plus} />
    </Button>
  ),
};

export const Loading: ButtonStoryObj = {
  args: {
    isLoading: true,
  },
};

export const Secondary: ButtonStoryObj = {
  args: {
    variant: "secondary",
  },
};
