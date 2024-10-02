import { recipe } from "@vanilla-extract/recipes";

import { vars } from "~/styles/theme.css";

export const link = recipe({
  variants: {
    color: {
      white: {
        color: vars.colors.white,
      },
      black: {
        color: vars.colors.black,
      },
    },
  },
});
