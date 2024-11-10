import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "~/styles/theme.css";

export const button = recipe({
  base: {
    fontFamily: vars.fonts.sourceSans3,
    fontSize: 18,
    background: vars.colors.eerieBlack,
    border: 0,
    color: vars.colors.white,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
    fontWeight: 600,
    display: "flex",
    transition: "opacity .2s, box-shadow .3s, transform .2s",
    selectors: {
      "&:hover": {
        opacity: 0.88,
        transitionTimingFunction: "cubic-bezier(0,0,.2,1)",
        boxShadow: `${vars.colors.white} 0px 0px 0px 2px, ${vars.colors.eerieBlack} 0px 0px 0px 4px`,
      },
      "&:active": {
        transform: "scale(0.95)",
      },
    },
  },
  variants: {
    size: {
      medium: {
        height: 50,
        borderRadius: 16,
        padding: "0 34px",
        gap: 12,
      },
      big: {
        height: 60,
        borderRadius: 26,
        padding: "0 40px",
        gap: 16,
      },
    },
  },
});

export const content = recipe({
  base: {
    display: "contents",
  },
  variants: {
    hidden: {
      true: {
        visibility: "hidden",
      },
    },
  },
});

const rotateSpinner = keyframes({
  "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
  "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
});

const spinnerSize = 26;

export const spinner = style({
  position: "absolute",
  width: spinnerSize,
  height: spinnerSize,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: `${rotateSpinner} 1s linear infinite`,
});
