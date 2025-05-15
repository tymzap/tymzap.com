import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";

export const name = style({
  fontFamily: vars.fonts.logo,
  fontWeight: 700,
  fontSize: 17,
});
