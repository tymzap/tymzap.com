import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

export const wrapper = style({
  margin: "30px 0",
  fontSize: 16,
});

export const syntaxHighlighter = { borderRadius: 8 };

export const codeTag = {
  fontFamily: vars.fonts.firaMono,
};
