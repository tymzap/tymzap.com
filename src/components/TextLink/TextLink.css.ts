import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const link = style({
  fontFamily: vars.fonts.sourceSans3,
  cursor: "pointer",
  textDecoration: "none",
  color: vars.colors.black,
  display: "inline-flex",
  selectors: {
    "&:hover": {
      opacity: 0.65,
    },
  },
});

export const withUnderline = style({
  textDecoration: "underline",
});
