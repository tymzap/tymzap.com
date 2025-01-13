import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "~/styles/themes/vars.css";
import { focusRing } from "~/styles/utils/focusRing";

export const wrapper = style({
  borderBottom: `1px solid ${vars.colors.subtleBorder}`,
});

export const trigger = recipe({
  base: {
    userSelect: "none",
    border: vars.colors.text,
    padding: 16,
    background: vars.colors.subtleInteractiveSurfaceBackground,
    display: "flex",
    justifyContent: "space-between",
    fontSize: 18,
    outline: 0,
    overflow: "hidden",
    color: vars.colors.text,
    fontFamily: vars.fonts.body,
    width: "100%",
    textAlign: "left",
    selectors: {
      "&:hover": {
        background: vars.colors.subtleInteractiveSurfaceBackgroundHovered,
      },
    },
  },
  variants: {
    withFocusRing: {
      true: focusRing(),
    },
  },
});

export const panel = style({
  overflow: "hidden",
});

export const panelContent = style({
  padding: 16,
});

const iconSize = 24;

export const icon = style({
  width: iconSize,
  marginLeft: 10,
  flexShrink: 0,
  height: iconSize,
  transition: "transform 0.15s ease-in-out",
  selectors: {
    [`${trigger()}[aria-expanded="true"] &`]: {
      transform: "rotate(-45deg)",
    },
  },
});
