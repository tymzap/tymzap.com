import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const input = style({
  fontSize: 18,
  color: vars.colors.eerieBlack,
  transition: "box-shadow .2s",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transitionTimingFunction: "cubic-bezier(0,0,.2,1)",
  border: `1px solid ${vars.colors.lightGray}`,
  paddingInlineStart: 14,
  paddingInlineEnd: 14,
  height: 50,
  fontFamily: vars.fonts.sourceSans3,
  borderRadius: 12,
  outline: 0,
  selectors: {
    "&:focus": {
      border: `1px solid ${vars.colors.gray}`,
      boxShadow: `0px 0px 0px 3px ${vars.colors.lightGray}`,
    },
    "&[aria-invalid]": {
      color: vars.colors.rustyRed,
    },
  },
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  fontFamily: vars.fonts.sourceSans3,
});

export const label = style({
  fontSize: 16,
});

export const errorMessage = style({
  fontSize: 16,
  color: vars.colors.rustyRed,
  fontWeight: 500,
});
