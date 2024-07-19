import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";
import { colors } from "~/styles/colors";
import { sizes } from "~/styles/sizes";

export const wrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: colors.alabaster,
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

export const contentWrapper = style({
  zIndex: 100,
  background: colors.alabaster,
  width: "100%",
  padding: "0 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
});

export const hamburgerButtonWrapper = style({
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      display: "none",
    },
  },
});

export const spacer = style({
  height: sizes.navigationBarHeight,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      display: "none",
    },
  },
});
