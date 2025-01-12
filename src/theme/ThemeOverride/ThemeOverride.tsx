"use client";

import { PropsWithChildren } from "react";

import { Theme } from "~/theme/Theme";

import { useThemeOverride } from "./useThemeOverride";

type ThemeOverrideProps = PropsWithChildren<{
  theme?: Theme;
  flip?: boolean;
}>;

export function ThemeOverride({ children, theme, flip }: ThemeOverrideProps) {
  const { themeClassName } = useThemeOverride({ flip, theme });

  return (
    <div
      className={themeClassName}
      style={{ display: "contents" }}
      suppressHydrationWarning={true}
    >
      {children}
    </div>
  );
}
