import { createTheme } from "@vanilla-extract/css";
import { rgba } from "polished";

import { colors } from "~/styles/colors";

import { vars } from "./vars.css";

export const light = createTheme(vars, {
  colors: {
    text: colors.eerieBlack,
    background: colors.cultured,
    interactiveText: colors.eerieBlack,
    interactiveSurfaceText: colors.white,
    interactiveSurfaceBackground: colors.eerieBlack,
    mutedInteractiveSurfaceBackground: colors.davysGray,
    subtleInteractiveSurfaceBackground: colors.cultured,
    subtleInteractiveSurfaceBackgroundHovered: rgba(colors.eerieBlack, 0.05),
    subtleBorder: colors.lightGray,
    errorText: colors.rustyRed,
    inputText: colors.eerieBlack,
    inputBackground: colors.white,
    inputBorder: colors.lightGray,
    inputBorderFocused: colors.gray,
    codeBackground: rgba(colors.eerieBlack, 0.08),
    codeText: colors.eerieBlack,
    focusRing: colors.eerieBlack,
  },
  fonts: {
    body: "var(--source-sans-3)",
    logo: "var(--open-sans)",
    code: "var(--fira-mono)",
  },
  shadows: {
    elevation: `0px 0px 14px -7px ${colors.eerieBlack}`,
    inputFocused: `0px 0px 0px 3px ${colors.lightGray}`,
  },
});
