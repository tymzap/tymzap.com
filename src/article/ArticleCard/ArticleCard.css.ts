import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";
import { vars } from "~/styles/themes/vars.css";

export const wrapper = style({
  fontFamily: vars.fonts.body,
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

export const title = style({
  color: vars.colors.interactiveText,
  fontWeight: 700,
  fontSize: 22,
  selectors: {
    [`${wrapper}:hover &`]: {
      opacity: 0.65,
    },
  },
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      fontSize: 24,
    },
  },
});
