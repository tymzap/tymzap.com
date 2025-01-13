import { createTheme } from "@vanilla-extract/css";
import { rgba } from "polished";

import { colors } from "~/styles/colors";

import { vars } from "./vars.css";

export const dark = createTheme(vars, {
  colors: {
    text: colors.white,
    background: colors.eerieBlack,
    interactiveText: colors.white,
    interactiveSurfaceText: colors.eerieBlack,
    interactiveSurfaceBackground: colors.white,
    mutedInteractiveSurfaceBackground: colors.davysGray,
    subtleInteractiveSurfaceBackground: colors.eerieBlack,
    subtleInteractiveSurfaceBackgroundHovered: rgba(colors.white, 0.05),
    subtleBorder: rgba(colors.gray, 0.4),
    errorText: colors.rustyRed,
    inputText: colors.white,
    inputBackground: colors.eerieBlack,
    inputBorder: colors.lightGray,
    inputBorderFocused: colors.gray,
    codeBackground: rgba(colors.white, 0.1),
    codeText: colors.white,
    focusRing: colors.white,
  },
  fonts: {
    body: "var(--source-sans-3)",
    logo: "var(--open-sans)",
    code: "var(--fira-mono)",
  },
  shadows: {
    elevation: `0px 0px 14px -7px ${colors.white}`,
    inputFocused: `0px 0px 0px 3px ${colors.gray}`,
  },
});
