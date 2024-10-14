import { Meta } from "@storybook/react";

import { ViewSourceButton } from "./ViewSourceButton";

const meta: Meta<typeof ViewSourceButton> = {
  component: ViewSourceButton,
  args: {
    repository: "tymzap/typescript-declaration-files-example",
  },
};

export default meta;

export const Default = {};
