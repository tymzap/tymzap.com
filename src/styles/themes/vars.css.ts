import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  colors: {
    text: null,
    background: null,
    interactiveText: null,
    interactiveSurfaceText: null,
    interactiveSurfaceBackground: null,
    mutedInteractiveSurfaceBackground: null,
    subtleInteractiveSurfaceBackground: null,
    subtleInteractiveSurfaceBackgroundHovered: null,
    subtleBorder: null,
    errorText: null,
    inputText: null,
    inputBackground: null,
    inputBorder: null,
    inputBorderFocused: null,
    codeText: null,
    codeBackground: null,
    focusRing: null,
  },
  fonts: {
    body: null,
    logo: null,
    code: null,
  },
  shadows: {
    elevation: null,
    inputFocused: null,
  },
});
