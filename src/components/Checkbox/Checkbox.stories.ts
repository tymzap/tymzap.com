import { Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { fn } from "@storybook/test";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    label: faker.lorem.words(5),
    onChange: fn(),
  },
};

export default meta;

export const Default = {};

export const Indeterminate: Meta<typeof Checkbox> = {
  args: {
    isIndeterminate: true,
  },
};
