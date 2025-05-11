import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";
import { mediaQueries } from "~/styles/mediaQueries";
import { resetAnchor } from "~/styles/utils/reset.css";

export const wrapper = style({
  fontFamily: vars.fonts.body,
  color: vars.colors.text,
  display: "flex",
  flexDirection: "column",
  gap: 24,
  borderRadius: 8,
});

export const heading = style({
  fontSize: 18,
  fontWeight: 600,
});

export const content = style({
  display: "flex",
  flexDirection: "row-reverse",
  gap: 32,
  "@media": {
    [mediaQueries.smallerThanTablet]: {
      flexDirection: "column",
    },
  },
});

export const image = style({
  width: "100%",
  height: 250,
  backgroundPosition: "center",
  borderRadius: 8,
  backgroundSize: "cover",
  flexShrink: 0,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      width: "50%",
    },
  },
});

export const textContent = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,
});

export const textContentLink = style([resetAnchor]);

export const title = style({
  color: vars.colors.interactiveText,
  fontWeight: 700,
  fontSize: 22,
  selectors: {
    [`${textContentLink}:hover &`]: {
      opacity: 0.65,
    },
  },
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      fontSize: 24,
    },
  },
});

export const viewArticleLinkWrapper = style({
  display: "none",
  marginTop: 24,
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      display: "block",
    },
  },
});
