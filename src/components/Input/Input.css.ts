import { style, createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "~/styles/theme.css";

const labelColor = createVar();
const inputColor = createVar();
const inputBackgroundColor = createVar();
const inputBorderColor = createVar();
const inputBorderColorFocused = createVar();
const inputBoxShadowFocused = createVar();

export const wrapper = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontFamily: vars.fonts.sourceSans3,
  },
  variants: {
    color: {
      black: {
        vars: {
          [inputColor]: vars.colors.white,
          [inputBorderColor]: vars.colors.gray,
          [inputBorderColorFocused]: vars.colors.gallery,
          [inputBackgroundColor]: vars.colors.eerieBlack,
          [inputBoxShadowFocused]: `0px 0px 0px 3px ${vars.colors.gray}`,
          [labelColor]: vars.colors.white,
        },
      },
      white: {
        vars: {
          [inputColor]: vars.colors.eerieBlack,
          [inputBorderColor]: vars.colors.lightGray,
          [inputBorderColorFocused]: vars.colors.gray,
          [inputBackgroundColor]: vars.colors.white,
          [inputBoxShadowFocused]: `0px 0px 0px 3px ${vars.colors.lightGray}`,
          [labelColor]: vars.colors.eerieBlack,
        },
      },
    },
  },
});

export const input = style({
  fontSize: 18,
  transition: "box-shadow .2s",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transitionTimingFunction: "cubic-bezier(0,0,.2,1)",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: inputBorderColor,
  paddingInlineStart: 14,
  paddingInlineEnd: 14,
  height: 50,
  fontFamily: vars.fonts.sourceSans3,
  borderRadius: 12,
  outline: 0,
  color: inputColor,
  backgroundColor: inputBackgroundColor,
  selectors: {
    "&[aria-invalid]": {
      color: vars.colors.rustyRed,
    },
    "&:focus": {
      borderColor: inputBorderColorFocused,
      boxShadow: inputBoxShadowFocused,
    },
  },
});

export const label = style({
  fontSize: 16,
  color: labelColor,
});

export const errorMessage = style({
  fontSize: 16,
  color: vars.colors.rustyRed,
  fontWeight: 500,
});
