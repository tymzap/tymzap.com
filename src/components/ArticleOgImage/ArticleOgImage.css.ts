import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const wrapper = style({
  width: 1200,
  height: 630,
  boxSizing: "border-box",
  padding: 65,
  background: vars.colors.alabaster,
  fontFamily: vars.fonts.sourceSans3,
});

export const contentWrapper = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
});

export const title = style({
  display: "block",
  fontSize: 60,
  fontWeight: 700,
});
