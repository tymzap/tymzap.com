import { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/csf";
import cn from "classnames";

import { theme } from "~/styles/theme.css";
import { dmSans } from "~/styles/fonts";

export function ThemeDecorator(renderStory: PartialStoryFn<ReactRenderer>) {
  return <div className={cn(theme, dmSans.variable)}>{renderStory()}</div>;
}
