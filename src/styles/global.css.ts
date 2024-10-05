import { globalStyle } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

globalStyle("body", {
  backgroundColor: vars.colors.alabaster,
  position: "relative",
  minHeight: "100vh",
  fontFamily: vars.fonts.dmSans,
});
