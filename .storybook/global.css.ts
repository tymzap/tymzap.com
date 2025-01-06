import { globalStyle } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";
import { colors } from "~/styles/colors";

globalStyle("#storybook-theme-root", {
  fontFamily: vars.fonts.body,
  fontSize: 18,
});

globalStyle(".sb-show-main, .docs-story", {
  background: colors.cultured,
});
