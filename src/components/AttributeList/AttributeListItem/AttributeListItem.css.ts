import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";

export const wrapper = style({
  fontFamily: vars.fonts.body,
  fontSize: 18,
  color: vars.colors.text,
  selectors: {
    "&:not(:last-child)::after": {
      content: `"•"`,
      marginLeft: 10,
      color: vars.colors.text,
    },
  },
});
