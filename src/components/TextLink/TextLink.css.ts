import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const link = style({
  fontFamily: vars.fonts.sourceSans3,
  cursor: "pointer",
  textDecoration: "none",
  color: vars.colors.eerieBlack,
  display: "inline-flex",
  gap: 6,
  selectors: {
    "&:hover": {
      opacity: 0.65,
    },
  },
});

export const withUnderline = style({
  textDecoration: "underline",
});
