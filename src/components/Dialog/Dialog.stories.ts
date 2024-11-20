import { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { fn } from "@storybook/test";

import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  args: {
    children: faker.lorem.paragraph(),
    isOpened: true,
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 250,
      },
    },
  },
};

export default meta;

type DialogStoryObj = StoryObj<typeof Dialog>;

export const Default = {};

export const WithCloseHandler: DialogStoryObj = {
  args: {
    onClose: fn(),
  },
};

export const WithTitle: DialogStoryObj = {
  args: {
    title: faker.lorem.words(5),
  },
};

export const WithTitleAndCloseHandler: DialogStoryObj = {
  args: {
    title: faker.lorem.words(5),
    onClose: fn(),
  },
};
