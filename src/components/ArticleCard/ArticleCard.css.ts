import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";
import { vars } from "~/styles/theme.css";

export const wrapper = style({
  fontFamily: vars.fonts.sourceSans3,
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
  fontSize: 18,
});

export const title = style({
  fontWeight: 700,
  fontSize: 22,
  selectors: {
    [`${wrapper}:hover &`]: {
      opacity: 0.65,
    },
  },
});
