import { Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { ComponentProps } from "react";

import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  render: (args) => <Story {...args} />,
};

export const Default = {};

export default meta;

function Story(props: ComponentProps<typeof Accordion>) {
  return (
    <Accordion {...props}>
      {ITEMS.map((item) => (
        <Accordion.Item label={item.label} key={item.label}>
          {item.children}
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

const ITEMS = Array.from({ length: 3 }).map(() => ({
  children: faker.lorem.sentences(5),
  label: faker.lorem.words(5),
}));
