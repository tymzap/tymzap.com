import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const wrapper = style({
  margin: 0,
  paddingLeft: 32,
  display: "flow-root",
  borderLeft: `10px solid ${vars.colors.lightGray}`,
  fontFamily: vars.fonts.sourceSans3,
  backgroundColor: vars.colors.gallery,
});

export const content = style({
  padding: "24px 24px 24px 0",
});
