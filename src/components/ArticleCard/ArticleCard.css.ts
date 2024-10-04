import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  cursor: "pointer",
});

export const image = style({
  width: "100%",
  height: 250,
  backgroundPosition: "center",
  borderRadius: 8,
  backgroundSize: "cover",
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      height: 300,
    },
  },
});

export const details = style({
  display: "flex",
  gap: 10,
});

export const detailsItem = style({
  fontSize: 16,
});

export const title = style({
  fontWeight: 600,
  fontSize: 20,
  selectors: {
    [`${wrapper}:hover &`]: {
      opacity: 0.65,
    },
  },
});
