import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const anchor = style({
  fontFamily: vars.fonts.sourceSans3,
  cursor: "pointer",
  color: vars.colors.black,
  textDecoration: "none",
});

export const adornment = style({
  display: "inline-block",
  transition: "transform .3s",
  selectors: {
    [`${anchor}:hover &`]: {
      transform: "translateX(6px)",
    },
  },
});
