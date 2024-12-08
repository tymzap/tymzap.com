import { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  render: (props) => (
    <div style={{ maxWidth: 300 }}>
      <Input {...props} />
    </div>
  ),
};

type InputStoryObj = StoryObj<typeof Input>;

export const Default = {};

export const WithLabel: InputStoryObj = {
  args: {
    label: faker.lorem.words(3),
  },
};

export const WithLabelAndError: InputStoryObj = {
  args: {
    label: faker.lorem.words(3),
    error: faker.lorem.words(3),
  },
};

export const Black: InputStoryObj = {
  args: {
    color: "black",
  },
  parameters: {
    backgrounds: {
      default: "Eerie black",
    },
  },
};

export default meta;
