import { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import Close from "~/icons/close.svg";

import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  args: {
    onPress: fn(),
    icon: Close,
    label: "Close",
  },
};

export default meta;

export const Default = {};
