import { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import { AttributeList } from "./AttributeList";

const meta: Meta<typeof AttributeList> = {
  component: AttributeList,
  render: () => (
    <AttributeList>
      {ITEMS.map((item) => (
        <AttributeList.Item key={item}>{item}</AttributeList.Item>
      ))}
    </AttributeList>
  ),
};

export default meta;

export const Default = {};

const ITEMS = Array.from({ length: 3 }).map(() => faker.lorem.words(3));
