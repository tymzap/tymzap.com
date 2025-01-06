import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";

export const link = style({
  fontFamily: vars.fonts.body,
  cursor: "pointer",
  textDecoration: "none",
  color: vars.colors.interactiveText,
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
