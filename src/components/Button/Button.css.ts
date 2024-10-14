import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const button = style({
  fontFamily: vars.fonts.sourceSans3,
  fontSize: 18,
  background: vars.colors.black,
  border: 0,
  color: vars.colors.white,
  cursor: "pointer",
  padding: "16px 40px",
  borderRadius: 26,
  transition: "opacity .2s, box-shadow .3s, transform .2s",
  selectors: {
    "&:hover": {
      opacity: 0.88,
      transitionTimingFunction: "cubic-bezier(0,0,.2,1)",
      boxShadow: `${vars.colors.white} 0px 0px 0px 2px, ${vars.colors.black} 0px 0px 0px 4px`,
    },
    "&:active": {
      transform: "scale(0.95)",
    },
  },
});
