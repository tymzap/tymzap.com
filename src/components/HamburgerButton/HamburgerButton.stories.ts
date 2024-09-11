import { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import { HamburgerButton } from "./HamburgerButton";

const meta: Meta<typeof HamburgerButton> = {
  component: HamburgerButton,
  args: {
    onPress: fn(),
    isPressed: false,
  },
};

export default meta;

export const Default = {};
