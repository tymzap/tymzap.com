import { createTheme } from "@vanilla-extract/css";

import { colors } from "~/styles/colors";

export const [theme, vars] = createTheme({
  colors,
  fonts: {
    sourceSans3: "var(--source-sans-3)",
    firaMono: "var(--fira-mono)",
    openSans: "var(--open-sans)",
  },
});
