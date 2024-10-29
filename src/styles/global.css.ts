import { globalStyle } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

globalStyle("body", {
  backgroundColor: vars.colors.cultured,
  position: "relative",
  minHeight: "100vh",
  fontFamily: vars.fonts.sourceSans3,
  fontSize: 18,
});
