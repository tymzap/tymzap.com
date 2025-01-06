import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";

export const code = style({
  fontSize: 15,
  fontWeight: 400,
  padding: "3px 6px",
  borderRadius: 8,
  backgroundColor: vars.colors.codeBackground,
  fontFamily: vars.fonts.code,
});
