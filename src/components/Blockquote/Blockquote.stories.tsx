import { Meta, ReactRenderer } from "@storybook/react";
import { faker } from "@faker-js/faker";

import { Blockquote } from "./Blockquote";

const meta: Meta<typeof Blockquote> = {
  component: Blockquote,
  render: (props) => (
    <Blockquote>
      <Blockquote.Content>{faker.lorem.paragraph()}</Blockquote.Content>
    </Blockquote>
  ),
};

export default meta;

export const Default = {};
