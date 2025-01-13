import { ReactRenderer, StoryContext } from "@storybook/react";
import { PartialStoryFn } from "@storybook/csf";
import { useEffect } from "react";

import { getThemeClassName } from "~/theme/getThemeClassName";
import { sourceSans3, firaMono, openSans } from "~/styles/fonts";
import { Theme } from "~/theme/Theme";
import { getOppositeTheme } from "~/theme/getOppositeTheme";

export function ThemeDecorator(
  renderStory: PartialStoryFn<ReactRenderer>,
  storyContext: StoryContext,
) {
  const { theme } = storyContext.globals;

  useEffect(() => {
    addFontClassNames();
  }, []);

  useEffect(() => {
    syncThemeClassName(theme);
  }, [theme]);

  return <>{renderStory()}</>;
}

function syncThemeClassName(theme: Theme) {
  const [storyElement] = document.getElementsByClassName(
    STORY_ELEMENT_CLASS_NAME,
  );

  const themeToRemove = getOppositeTheme(theme);

  storyElement.classList.add(getThemeClassName(theme));
  storyElement.classList.remove(getThemeClassName(themeToRemove));
}

function addFontClassNames() {
  const [storyElement] = document.getElementsByClassName(
    STORY_ELEMENT_CLASS_NAME,
  );

  const fontClassNames = [
    sourceSans3.variable,
    firaMono.variable,
    openSans.variable,
  ];

  fontClassNames.forEach((className) => {
    storyElement.classList.add(className);
  });
}

const STORY_ELEMENT_CLASS_NAME = "sb-show-main";
