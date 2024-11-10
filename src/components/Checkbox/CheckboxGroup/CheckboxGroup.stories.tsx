import { Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { ComponentProps, useEffect, useState } from "react";
import { fn } from "@storybook/test";

import { CheckboxGroup } from "./CheckboxGroup";
import { Checkbox } from "../Checkbox";

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  args: {
    label: faker.lorem.words(5),
    onChange: fn(),
  },
  render: (args) => <Story {...args} />,
};

export default meta;

export const Default = {};

function Story(props: ComponentProps<typeof CheckboxGroup>) {
  const [value, setValue] = useState<string[] | undefined>(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleChange = (value: string[]) => {
    props.onChange?.(value);

    setValue(value);
  };

  return (
    <CheckboxGroup {...props} value={value} onChange={handleChange}>
      {INPUTS.map((radio) => (
        <Checkbox label={radio.label} value={radio.value} key={radio.value} />
      ))}
    </CheckboxGroup>
  );
}

const INPUTS = Array.from({ length: 3 }).map(() => {
  const value = faker.lorem.words(5);

  return {
    value,
    label: value,
  };
});
