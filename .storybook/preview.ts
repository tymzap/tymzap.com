import { Preview } from "@storybook/react";

import { ThemeDecorator } from "./ThemeDecorator";
import { viewports } from "./viewports";
import "~/styles/global.css";

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
  },
  decorators: [ThemeDecorator],
};

export default preview;
