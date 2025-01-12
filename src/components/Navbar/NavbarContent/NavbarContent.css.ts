import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";
import { zIndex } from "~/styles/zIndex";

export const wrapper = style({
  width: "100%",
  padding: "0 16px 0 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  zIndex: zIndex.navbar,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      padding: "0 32px",
    },
  },
});

export const buttonsWrapper = style({
  display: "flex",
  gap: 10,
  alignItems: "center",
  marginLeft: 20,
  marginTop: 2,
  "@media": {
    [mediaQueries.laptopOrBigger]: {
      display: "none",
    },
  },
});

export const themeButtonAndLinksWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: 30,
  "@media": {
    [mediaQueries.smallerThanLaptop]: {
      display: "none",
    },
  },
});

export const linksWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: 40,
});
