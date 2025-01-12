import { Preview } from "@storybook/react";
import "sanitize.css";

import "./global.css";
import { viewports } from "./viewports";
import { nextIntlConfig } from "./nextIntlConfig";
import { ThemeDecorator } from "./ThemeDecorator";
import "../src/config/yupLocale";
import { theme } from "./globalTypes/theme";

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
    backgrounds: {
      disable: true,
    },
  },
  decorators: [ThemeDecorator],
  globalTypes: {
    theme,
  },
};

export default preview;
