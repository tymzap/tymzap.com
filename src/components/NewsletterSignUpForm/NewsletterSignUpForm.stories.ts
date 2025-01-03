import { Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { fn } from "@storybook/test";

import { NewsletterSignUpForm } from "./NewsletterSignUpForm";

const meta: Meta<typeof NewsletterSignUpForm> = {
  component: NewsletterSignUpForm,
  args: {
    title: faker.lorem.words(5),
    description: faker.lorem.words(20),
    onSubmit: fn(),
  },
};

export default meta;

export const Default = {};
