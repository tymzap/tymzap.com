import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const code = style({
  fontSize: 15,
  fontWeight: 400,
  padding: "3px 6px",
  borderRadius: 8,
  backgroundColor: vars.colors.gallery,
  fontFamily: vars.fonts.firaMono,
});
