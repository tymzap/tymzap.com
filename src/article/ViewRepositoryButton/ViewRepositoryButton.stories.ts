import { Meta } from "@storybook/react";

import { ViewRepositoryButton } from "./ViewRepositoryButton";

const meta: Meta<typeof ViewRepositoryButton> = {
  component: ViewRepositoryButton,
  args: {
    repository: "tymzap/typescript-declaration-files-example",
  },
};

export default meta;

export const Default = {};
