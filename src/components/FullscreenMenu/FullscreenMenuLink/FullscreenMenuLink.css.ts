import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";

export const link = style({
  color: vars.colors.text,
  textDecoration: "none",
  fontSize: 36,
});
