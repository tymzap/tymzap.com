import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";
import { mediaQueries } from "~/styles/mediaQueries";

export const logo = style({
  color: vars.colors.text,
  fontFamily: vars.fonts.logo,
  fontSize: 20,
  fontWeight: 700,
  whiteSpace: "nowrap",
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      fontSize: 20,
    },
  },
});

export const link = style({
  textDecoration: "none",
});
