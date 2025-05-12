import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: 140,
  gap: 8,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      marginTop: 180,
    },
  },
});

export const text = style({
  fontWeight: 500,
});

export const buttons = style({
  display: "flex",
  flexDirection: "row",
  gap: 8,
});
