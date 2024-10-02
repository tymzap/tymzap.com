import { style } from "@vanilla-extract/css";

import { sizes } from "~/styles/sizes";

export const wrapper = style({
  maxWidth: sizes.contentWidth,
  padding: "16px 32px",
  margin: "0 auto",
});
