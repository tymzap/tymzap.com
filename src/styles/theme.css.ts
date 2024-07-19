import { createTheme } from "@vanilla-extract/css";

import { colors } from "~/styles/colors";

export const [theme, vars] = createTheme({
  colors,
  fonts: {
    dmSans: "var(--dm-sans)",
  },
});
