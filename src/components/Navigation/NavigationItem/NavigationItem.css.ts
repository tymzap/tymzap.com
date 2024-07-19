import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const anchor = style({
  fontFamily: vars.fonts.dmSans,
  cursor: "pointer",
  color: vars.colors.black,
  textDecoration: "none",
  borderRadius: 4,
  fontWeight: 500,
  padding: "4px 6px",
  transition: "background-color .2s",
  flexShrink: 0,
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.gallery,
    },
    [`&[aria-current="page"]`]: {
      backgroundColor: vars.colors.gallery,
    },
  },
});
