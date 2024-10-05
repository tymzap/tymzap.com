import { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/csf";
import cn from "classnames";

import { theme } from "~/styles/theme.css";
import { sourceSans3, firaMono, openSans } from "~/styles/fonts";

export function ThemeDecorator(renderStory: PartialStoryFn<ReactRenderer>) {
  return (
    <div
      className={cn(
        theme,
        sourceSans3.variable,
        firaMono.variable,
        openSans.variable,
      )}
    >
      {renderStory()}
    </div>
  );
}
