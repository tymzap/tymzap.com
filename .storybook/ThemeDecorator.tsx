import { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/csf";
import cn from "classnames";

import { light } from "~/styles/themes/light.css";
import { sourceSans3, firaMono, openSans } from "~/styles/fonts";

export function ThemeDecorator(renderStory: PartialStoryFn<ReactRenderer>) {
  return (
    <div
      id={"storybook-theme-root"}
      className={cn(
        light,
        sourceSans3.variable,
        firaMono.variable,
        openSans.variable,
      )}
    >
      {renderStory()}
    </div>
  );
}
