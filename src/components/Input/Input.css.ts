import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { hideVisually } from "polished";

import { vars } from "~/styles/themes/vars.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  fontFamily: vars.fonts.body,
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
  borderColor: vars.colors.inputBorder,
  paddingInlineStart: 14,
  paddingInlineEnd: 14,
  height: 50,
  fontFamily: vars.fonts.body,
  borderRadius: 12,
  outline: 0,
  color: vars.colors.inputText,
  backgroundColor: vars.colors.inputBackground,
  selectors: {
    "&[aria-invalid]": {
      color: vars.colors.errorText,
    },
    "&:focus": {
      borderColor: vars.colors.inputBorderFocused,
      boxShadow: vars.shadows.inputFocused,
    },
  },
});

export const label = recipe({
  base: {
    fontSize: 16,
    color: vars.colors.text,
  },
  variants: {
    hidden: {
      true: hideVisually(),
    },
  },
});

export const errorMessage = style({
  fontSize: 16,
  color: vars.colors.errorText,
  padding: "2px 0",
  height: 20,
  fontWeight: 500,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
