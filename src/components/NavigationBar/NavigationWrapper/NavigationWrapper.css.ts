import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";
import { colors } from "~/styles/colors";
import { sizes } from "~/styles/sizes";

export const wrapper = style({
  gap: 16,
  display: "flex",
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      display: "flex",
      transform: "translateY(0%) !important",
    },
    [mediaQueries.smallerThanTablet]: {
      padding: 12,
      background: colors.wildSand,
      position: "fixed",
      flexDirection: "column",
      top: sizes.navigationBarHeight,
      left: 0,
      right: 0,
    },
  },
});
