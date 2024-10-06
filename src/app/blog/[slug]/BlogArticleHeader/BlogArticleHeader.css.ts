import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";
import { mediaQueries } from "~/styles/mediaQueries";

export const heading = style({
  fontFamily: vars.fonts.sourceSans3,
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

export const details = style({
  display: "flex",
  gap: 10,
});

export const detailsItem = style({
  fontSize: 18,
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
