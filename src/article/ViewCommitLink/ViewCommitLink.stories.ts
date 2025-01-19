import { Meta } from "@storybook/react";

import { ViewCommitLink } from "./ViewCommitLink";

const meta: Meta<typeof ViewCommitLink> = {
  component: ViewCommitLink,
  args: {
    commit: "tymzap/tymzap.com/commit/ae5098409752efa4b90ef3fb60040ac4cdbfce72",
  },
};

export default meta;

export const Default = {};
