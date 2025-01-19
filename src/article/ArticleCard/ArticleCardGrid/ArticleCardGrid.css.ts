import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "auto",
  gap: 32,
  marginTop: 32,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});
