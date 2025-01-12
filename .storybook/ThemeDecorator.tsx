import { ReactRenderer, StoryContext } from "@storybook/react";
import { PartialStoryFn } from "@storybook/csf";
import cn from "classnames";
import { useEffect } from "react";

import { getThemeClassName } from "~/theme/getThemeClassName";
import { sourceSans3, firaMono, openSans } from "~/styles/fonts";
import { vars } from "~/styles/themes/vars.css";
import { Theme } from "~/theme/Theme";
import { getOppositeTheme } from "~/theme/getOppositeTheme";

export function ThemeDecorator(
  renderStory: PartialStoryFn<ReactRenderer>,
  storyContext: StoryContext,
) {
  const { theme } = storyContext.globals;

  useEffect(() => {
    syncThemeClassName(theme);
  }, [theme]);

  return (
    <div
      className={cn(
        getThemeClassName(theme),
        sourceSans3.variable,
        firaMono.variable,
        openSans.variable,
      )}
    >
      {renderStory()}
    </div>
  );
}

function syncThemeClassName(theme: Theme) {
  const [storyElement] = document.getElementsByClassName(
    STORY_ELEMENT_CLASS_NAME,
  );

  const themeToRemove = getOppositeTheme(theme);

  storyElement.classList.add(getThemeClassName(theme));
  storyElement.classList.remove(getThemeClassName(themeToRemove));
}

const STORY_ELEMENT_CLASS_NAME = "sb-show-main";
