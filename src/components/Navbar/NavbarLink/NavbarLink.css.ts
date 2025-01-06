import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";

export const link = style({
  color: vars.colors.interactiveText,
  textDecoration: "none",
  fontWeight: 500,
  fontSize: 18,
  selectors: {
    "&:hover": {
      opacity: 0.65,
    },
    "&[aria-current=page]": {
      fontWeight: 700,
    },
  },
});
