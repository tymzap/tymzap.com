import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";

export const wrapper = style({
  margin: 0,
  paddingLeft: 32,
  display: "flow-root",
  borderLeft: `7px solid ${vars.colors.text}`,
  fontFamily: vars.fonts.body,
});

export const content = style({
  padding: "24px 24px 24px 0",
});
