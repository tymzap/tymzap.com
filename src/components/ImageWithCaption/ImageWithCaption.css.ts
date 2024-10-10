import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  margin: "40px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      margin: "60px 0",
    },
  },
});

export const caption = style({
  opacity: 0.6,
  textAlign: "center",
});
