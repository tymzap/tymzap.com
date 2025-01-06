import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { hideVisually } from "polished";

import { vars } from "~/styles/themes/vars.css";

export const label = style({
  cursor: "pointer",
  userSelect: "none",
  display: "flex",
  gap: 10,
});

export const input = style(hideVisually());

export const bulletWrapper = recipe({
  base: {
    width: 24,
    color: vars.colors.interactiveSurfaceText,
    height: 24,
    transition: "box-shadow .2s",
    flexShrink: 0,
    border: `3px solid ${vars.colors.interactiveSurfaceBackground}`,
    display: "inline-flex",
    borderRadius: "50%",
  },
  variants: {
    withBackground: {
      true: {
        background: vars.colors.interactiveSurfaceBackground,
      },
    },
    withFocus: {
      true: {
        boxShadow: vars.shadows.inputFocused,
      },
    },
  },
});
