import { Meta, ReactRenderer } from "@storybook/react";
import { faker } from "@faker-js/faker";

import { Blockquote } from "./Blockquote";

const meta: Meta<typeof Blockquote> = {
  component: Blockquote,
  args: {
    children: faker.lorem.paragraph(),
  },
  render: (props) => (
    <Blockquote>
      <Blockquote.Content>{props.children}</Blockquote.Content>
    </Blockquote>
  ),
};

export default meta;

export const Default = {};
