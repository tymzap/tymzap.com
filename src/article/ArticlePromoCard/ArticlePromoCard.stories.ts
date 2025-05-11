import { Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";

import sandstone from "../../../.storybook/assets/sandstone.webp";
import { ArticlePromoCard } from "./ArticlePromoCard";

const meta: Meta<typeof ArticlePromoCard> = {
  component: ArticlePromoCard,
  args: {
    title: faker.lorem.words(6),
    imageSrc: sandstone.src,
    visitorsCount: faker.number.int({ min: 500, max: 5000 }),
    readTime: "5 min read",
    href: "#",
    heading: faker.lorem.words(3),
  },
};

export default meta;

export const Default = {};
