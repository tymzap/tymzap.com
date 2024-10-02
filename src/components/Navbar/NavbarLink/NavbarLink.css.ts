import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const link = style({
  color: vars.colors.black,
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 16,
  selectors: {
    "&:hover": {
      opacity: 0.65,
    },
  },
});
