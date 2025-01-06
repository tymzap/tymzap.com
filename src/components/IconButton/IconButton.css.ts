import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";

const buttonSize = 45;

export const button = style({
  fontSize: 14,
  border: 0,
  color: vars.colors.text,
  cursor: "pointer",
  width: buttonSize,
  height: buttonSize,
  background: "transparent",
});
