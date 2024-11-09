import { Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    label: faker.lorem.words(5),
  },
};

export default meta;

export const Default = {};

export const Indeterminate: Meta<typeof Checkbox> = {
  args: {
    isIndeterminate: true,
  },
};
