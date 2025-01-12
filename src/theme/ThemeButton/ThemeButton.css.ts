import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";
import { mediaQueries } from "~/styles/mediaQueries";

const buttonSize = 45;

export const button = style({
  color: vars.colors.text,
  fontSize: 14,
  border: 0,
  cursor: "pointer",
  padding: 12,
  width: buttonSize,
  height: buttonSize,
  background: "transparent",
  "@media": {
    [mediaQueries.laptopOrBigger]: {
      outline: "none",
      selectors: {
        "&:hover": {
          opacity: 0.65,
        },
      },
    },
  },
});
