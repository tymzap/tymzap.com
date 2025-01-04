import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  marginTop: 100,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      marginTop: 150,
    },
  },
});
