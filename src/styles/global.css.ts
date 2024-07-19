import { globalStyle } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";

globalStyle("*", {
  fontFamily: vars.fonts.dmSans,
});

globalStyle("body", {
  backgroundColor: vars.colors.alabaster,
});
