import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  margin: "150px 0 50px",
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      margin: "180px 0 80px",
    },
  },
});
