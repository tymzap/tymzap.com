import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const logo = style({
  fontFamily: vars.fonts.dmSans,
  fontWeight: 600,
  fontSize: 18,
});
