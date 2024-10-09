import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";
import { mediaQueries } from "~/styles/mediaQueries";

export const logo = recipe({
  base: {
    fontFamily: vars.fonts.openSans,
    fontSize: 20,
    fontWeight: 700,
    whiteSpace: "nowrap",
    "@media": {
      [mediaQueries.tabletOrBigger]: {
        fontSize: 20,
      },
    },
  },
  variants: {
    color: {
      black: {
        color: vars.colors.black,
      },
      white: {
        color: vars.colors.white,
      },
    },
  },
});

export const link = style({
  textDecoration: "none",
});
