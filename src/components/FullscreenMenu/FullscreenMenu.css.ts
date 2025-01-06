import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";
import { zIndex } from "~/styles/zIndex";

export const wrapper = style({
  background: vars.colors.background,
  position: "fixed",
  inset: 0,
  zIndex: zIndex.fullscreenMenu,
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
  marginTop: 100,
  "@media": {
    "(orientation: landscape)": {
      marginTop: 0,
    },
  },
});

export const contactLinksWrapper = style({
  display: "flex",
  flexDirection: "row",
  gap: 20,
  justifyContent: "center",
  alignItems: "center",
});
