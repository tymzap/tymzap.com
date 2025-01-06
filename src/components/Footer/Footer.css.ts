import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";
import { sizes } from "~/styles/sizes";
import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  background: vars.colors.background,
  color: vars.colors.text,
  marginTop: 50,
  height: sizes.footerHeight,
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
});

export const contentWrapper = style({
  maxWidth: sizes.contentWidth,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "0 32px",
  justifyContent: "center",
});

export const contactLinksWrapper = style({
  marginTop: 32,
  "@media": {
    [mediaQueries.smallerThanTablet]: {
      display: "flex",
      justifyContent: "center",
    },
  },
});

export const text = style({
  display: "block",
  "@media": {
    [mediaQueries.smallerThanTablet]: {
      textAlign: "center",
    },
  },
});

export const name = style({
  fontFamily: vars.fonts.logo,
  fontWeight: 700,
  fontSize: 17,
});
