import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { hideVisually } from "polished";

import { vars } from "~/styles/theme.css";

export const label = style({
  cursor: "pointer",
  userSelect: "none",
  fontFamily: vars.fonts.sourceSans3,
  display: "flex",
  gap: 10,
});

export const input = style(hideVisually());

export const checkmarkWrapper = recipe({
  base: {
    width: 24,
    color: vars.colors.white,
    height: 24,
    transition: "box-shadow .2s",
    flexShrink: 0,
    boxSizing: "border-box",
    border: `3px solid ${vars.colors.eerieBlack}`,
    display: "inline-flex",
    borderRadius: 6,
  },
  variants: {
    withBackground: {
      true: {
        background: vars.colors.eerieBlack,
      },
    },
    withFocus: {
      true: {
        boxShadow: `0px 0px 0px 3px ${vars.colors.lightGray}`,
      },
    },
  },
});
