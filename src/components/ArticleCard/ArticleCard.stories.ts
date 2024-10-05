import { Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";

import sandstone from "../../../.storybook/assets/sandstone.webp";
import { ArticleCard } from "./ArticleCard";

const meta: Meta<typeof ArticleCard> = {
  component: ArticleCard,
  args: {
    imageSrc: sandstone.src,
    title: faker.lorem.words(6),
    publishedAt: new Date(2024, 7, 21),
    readTime: 5,
  },
};

export default meta;

export const Default = {};
