import { style } from "@vanilla-extract/css";

import { colors } from "~/styles/colors";
import { sizes } from "~/styles/sizes";

export const content = style({
  maxWidth: sizes.contentWidth,
  margin: "0 auto",
  padding: 16,
});

export const adornment = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  borderTop: `6px solid ${colors.black}`,
  height: 6,
});
