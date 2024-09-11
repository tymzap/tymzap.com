import { Preview } from "@storybook/react";

import { ThemeDecorator } from "./ThemeDecorator";
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
  },
  decorators: [ThemeDecorator],
};

export default preview;
