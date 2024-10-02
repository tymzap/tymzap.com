import { style } from "@vanilla-extract/css";

import { sizes } from "~/styles/sizes";
import { mediaQueries } from "~/styles/mediaQueries";

export const spacer = style({
  height: sizes.navigationBarHeight,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      display: "none",
    },
  },
});

export const wrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: sizes.navigationBarHeight,
  maxWidth: sizes.contentWidth,
  margin: "0 auto",
  "@media": {
    [mediaQueries.smallerThanTablet]: {
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
    },
  },
});
