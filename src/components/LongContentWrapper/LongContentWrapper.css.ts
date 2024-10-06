import { style } from "@vanilla-extract/css";

import { sizes } from "~/styles/sizes";
import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      maxWidth: sizes.longContentWidth,
      margin: "0 auto",
    },
  },
});
