import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const link = style({
  color: vars.colors.white,
  textDecoration: "none",
  fontSize: 36,
});
