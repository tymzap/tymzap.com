import { styleVariants, style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

const base = style({
  fontFamily: vars.fonts.sourceSans3,
  fontWeight: 700,
});

export const heading = styleVariants({
  1: [
    base,
    {
      fontSize: 30,
    },
  ],
  2: [
    base,
    {
      fontSize: 27,
    },
  ],
  3: [
    base,
    {
      fontSize: 24,
    },
  ],
  4: [
    base,
    {
      fontSize: 20,
    },
  ],
  5: [
    base,
    {
      fontSize: 18,
    },
  ],
  6: [
    base,
    {
      fontSize: 16,
    },
  ],
});
