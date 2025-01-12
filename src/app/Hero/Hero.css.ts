import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: 50,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      flexDirection: "row",
      gap: 40,
    },
  },
});

export const content = style({
  maxWidth: 700,
  paddingBottom: 50,
});

export const image = style({
  borderRadius: 8,
});
