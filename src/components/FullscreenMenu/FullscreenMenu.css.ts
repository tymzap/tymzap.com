import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const wrapper = style({
  background: vars.colors.black,
  position: "fixed",
  inset: 0,
});

export const linksWrapper = style({
  position: "fixed",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20%",
});

export const menuLinksWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20%",
});

export const socialMediaLinksWrapper = style({
  display: "flex",
  flexDirection: "row",
  gap: 20,
  justifyContent: "center",
  alignItems: "center",
});
