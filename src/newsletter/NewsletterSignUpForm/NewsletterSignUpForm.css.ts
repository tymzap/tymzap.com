import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";
import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  background: vars.colors.background,
  color: vars.colors.text,
  padding: 30,
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      alignItems: "center",
      padding: 60,
    },
  },
});

export const content = style({
  textAlign: "left",
  maxWidth: 600,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      textAlign: "center",
    },
  },
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  marginTop: 50,
  gap: 10,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 300px) auto",
      gap: 24,
    },
  },
});
