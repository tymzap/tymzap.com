import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const button = style({
  fontSize: 14,
  border: 0,
  color: vars.colors.black,
  cursor: "pointer",
  width: 45,
  height: 45,
  background: "transparent",
});
