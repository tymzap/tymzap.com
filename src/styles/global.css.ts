import { globalStyle } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";

globalStyle("body", {
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
  position: "relative",
  minHeight: "100vh",
  fontFamily: vars.fonts.body,
  fontSize: 18,
});
