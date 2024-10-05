import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";
import { mediaQueries } from "~/styles/mediaQueries";

export const heading = style({
  fontFamily: vars.fonts.sourceSans3,
  fontWeight: 600,
  fontSize: 30,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      fontSize: 40,
      textAlign: "center",
      margin: "60px 0",
    },
  },
});
