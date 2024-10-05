import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const button = style({
  fontFamily: vars.fonts.sourceSans3,
  fontSize: 15,
  background: vars.colors.black,
  border: 0,
  color: vars.colors.white,
  cursor: "pointer",
  padding: "12px 16px",
  borderRadius: 6,
  transition: "opacity .2s",
  selectors: {
    ["&:hover"]: {
      opacity: 0.8,
    },
  },
});
