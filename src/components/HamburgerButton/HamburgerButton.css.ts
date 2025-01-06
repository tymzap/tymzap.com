import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";

const buttonSize = 45;

export const button = style({
  color: vars.colors.text,
  fontSize: 14,
  border: 0,
  cursor: "pointer",
  width: buttonSize,
  height: buttonSize,
  background: "transparent",
});
