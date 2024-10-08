import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  display: "flex",
  marginTop: 100,
  marginBottom: 40,
  flexDirection: "column",
  gap: 25,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      flexDirection: "row",
      marginTop: 140,
      marginBottom: 40,
      gap: 40,
    },
  },
});

export const heading = style({
  fontWeight: 600,
  fontSize: 22,
});

export const contentWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 14,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      gap: 20,
    },
  },
});
