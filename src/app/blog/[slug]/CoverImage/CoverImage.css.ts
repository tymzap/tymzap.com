import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";

export const image = style({
  borderRadius: 8,
  margin: "15px 0 60px",
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      margin: "30px 0 100px 0",
    },
  },
});
