import { Preview } from "@storybook/react";

import "~/styles/global.css";

import { ThemeDecorator } from "./ThemeDecorator";
import { viewports } from "./viewports";
import { nextIntlConfig } from "./nextIntlConfig";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports,
    },
    nextIntl: nextIntlConfig,
  },
  decorators: [ThemeDecorator],
};

export default preview;
