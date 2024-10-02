import { recipe } from "@vanilla-extract/recipes";

import { vars } from "~/styles/theme.css";
import { mediaQueries } from "~/styles/mediaQueries";

export const logo = recipe({
  base: {
    fontFamily: vars.fonts.dmSans,
    fontWeight: 600,
    fontSize: 18,
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
