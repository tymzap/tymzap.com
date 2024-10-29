import { recipe } from "@vanilla-extract/recipes";

import { vars } from "~/styles/theme.css";

export const button = recipe({
  base: {
    fontSize: 14,
    border: 0,
    cursor: "pointer",
    width: 45,
    height: 45,
    background: "transparent",
  },
  variants: {
    color: {
      black: {
        color: vars.colors.eerieBlack,
      },
      white: {
        color: vars.colors.white,
      },
    },
  },
});
