import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";

export const wrapper = style({
  fontFamily: vars.fonts.body,
  fontWeight: 400,
  fontSize: 18,
  margin: 0,
  color: vars.colors.text,
});

export const withMargin = style({
  marginBlockStart: "1em",
  marginBlockEnd: "1em",
});

export const withBoldStyle = style({
  fontWeight: 700,
});
