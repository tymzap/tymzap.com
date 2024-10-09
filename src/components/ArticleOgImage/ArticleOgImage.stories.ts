import { Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";

import { ArticleOgImage } from "./ArticleOgImage";

const meta: Meta<typeof ArticleOgImage> = {
  component: ArticleOgImage,
  args: {
    title: faker.lorem.words(7),
  },
};

export default meta;

export const Default = {};
