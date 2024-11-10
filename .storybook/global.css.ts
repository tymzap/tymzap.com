import { globalStyle } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

globalStyle("#storybook-theme-root", {
  fontFamily: vars.fonts.sourceSans3,
  fontSize: 18,
});
