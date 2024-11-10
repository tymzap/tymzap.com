import { Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { ComponentProps, useEffect, useState } from "react";
import { fn } from "@storybook/test";

import { RadioGroup } from "./RadioGroup";
import { Radio } from "../Radio";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  args: {
    label: faker.lorem.words(5),
    onChange: fn(),
  },
  render: (args) => <Story {...args} />,
};

export default meta;

export const Default = {};

function Story(props: ComponentProps<typeof RadioGroup>) {
  const [value, setValue] = useState<string | undefined>(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleChange = (value: string) => {
    props.onChange?.(value);

    setValue(value);
  };

  return (
    <RadioGroup {...props} value={value} onChange={handleChange}>
      {INPUTS.map((radio) => (
        <Radio label={radio.label} value={radio.value} key={radio.value} />
      ))}
    </RadioGroup>
  );
}

const INPUTS = Array.from({ length: 3 }).map(() => {
  const value = faker.lorem.words(5);

  return {
    value,
    label: value,
  };
});
