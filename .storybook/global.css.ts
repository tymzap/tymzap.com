import { globalStyle } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";

globalStyle(".sb-show-main, .docs-story", {
  background: vars.colors.background,
  color: vars.colors.text,
  fontFamily: vars.fonts.body,
  fontSize: 18,
});
