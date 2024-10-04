import { style } from "@vanilla-extract/css";

import { sizes } from "~/styles/sizes";

export const wrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: sizes.navigationBarHeight,
  maxWidth: sizes.contentWidth,
  margin: "0 auto",
});
