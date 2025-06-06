import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";
import { mediaQueries } from "~/styles/mediaQueries";

export const heading = style({
  fontFamily: vars.fonts.body,
  fontWeight: 700,
  fontSize: 32,
  margin: 0,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      fontSize: 40,
      textAlign: "center",
    },
  },
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  margin: "30px 0 20px",
  gap: 20,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      margin: "60px 0",
      alignItems: "center",
    },
  },
});
