import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";
import { zIndex } from "~/styles/zIndex";

export const wrapper = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: 20,
  borderRadius: 12,
  backgroundColor: vars.colors.background,
  boxShadow: vars.shadows.elevation,
  zIndex: zIndex.dialog,
});

export const content = style({
  padding: 10,
});
