import { Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { ComponentProps } from "react";

import { Radio } from "./Radio";

const value = faker.lorem.words(5);

const meta: Meta<typeof Radio> = {
  component: Radio,
  args: {
    value,
    label: value,
  },
  render: (args) => <Story {...args} />,
};

export default meta;

export const Default = {};

function Story(props: ComponentProps<typeof Radio>) {
  return (
    <Radio.Group>
      <Radio {...props} />
    </Radio.Group>
  );
}
