import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const wrapper = style({
  display: "flex",
  gap: 50,
});

export const image = style({
  width: 200,
  height: 200,
});

export const textWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 3,
});

export const name = style({
  fontFamily: vars.fonts.openSans,
  fontSize: 40,
  fontWeight: 700,
});

export const address = style({
  fontSize: 35,
});
