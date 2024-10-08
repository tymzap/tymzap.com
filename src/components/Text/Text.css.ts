import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const wrapper = style({
  fontFamily: vars.fonts.sourceSans3,
  fontWeight: 400,
  fontSize: 18,
  margin: 0,
});

export const withMargin = style({
  marginBlockStart: "1em",
  marginBlockEnd: "1em",
});
