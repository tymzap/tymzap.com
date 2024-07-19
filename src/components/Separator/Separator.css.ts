import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const separator = style({
  backgroundColor: vars.colors.concrete,
  height: 1,
  width: "100%",
});
