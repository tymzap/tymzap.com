import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";
import { mediaQueries } from "~/styles/mediaQueries";

const buttonSize = 35;

export const button = style({
  color: vars.colors.text,
  fontSize: 14,
  border: 0,
  cursor: "pointer",
  width: buttonSize,
  height: buttonSize,
  outline: "none",
  background: "transparent",
  "@media": {
    [mediaQueries.laptopOrBigger]: {
      selectors: {
        "&:hover": {
          opacity: 0.65,
        },
      },
    },
  },
});
