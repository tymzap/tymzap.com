import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  zIndex: 100,
  width: "100%",
  padding: "0 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
});

export const hamburgerButtonWrapper = style({
  marginTop: 4,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      display: "none",
    },
  },
});

export const linksWrapper = style({
  display: "flex",
  gap: 40,
  "@media": {
    [mediaQueries.smallerThanTablet]: {
      display: "none",
    },
  },
});
