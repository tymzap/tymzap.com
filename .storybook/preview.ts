import { Preview } from "@storybook/react";
import "sanitize.css";

import "./global.css";
import { viewports } from "./viewports";
import { backgrounds } from "./backgrounds";
import { nextIntlConfig } from "./nextIntlConfig";
import { ThemeDecorator } from "./ThemeDecorator";
import "../src/config/yupLocale";

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
    backgrounds,
    nextIntl: nextIntlConfig,
  },
  decorators: [ThemeDecorator],
};

export default preview;
