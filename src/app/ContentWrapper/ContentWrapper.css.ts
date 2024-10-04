import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { sizes } from "~/styles/sizes";

export const wrapper = style({
  maxWidth: sizes.contentWidth,
  padding: "16px 32px",
  margin: "0 auto",
  paddingBottom: calc.add(`${sizes.footerHeight}px`, "100px"),
});
