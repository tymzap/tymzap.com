import { styleVariants, style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";
import { vars } from "~/styles/themes/vars.css";

const baseHeading = style({
  fontFamily: vars.fonts.body,
  fontWeight: 700,
  color: vars.colors.text,
});

export const heading = styleVariants({
  2: [
    baseHeading,
    {
      fontSize: 27,
      "@media": {
        [mediaQueries.tabletOrBigger]: {
          fontSize: 30,
        },
      },
    },
  ],
  3: [
    baseHeading,
    {
      fontSize: 25,
      "@media": {
        [mediaQueries.tabletOrBigger]: {
          fontSize: 27,
        },
      },
    },
  ],
  4: [
    baseHeading,
    {
      fontSize: 22,
      "@media": {
        [mediaQueries.tabletOrBigger]: {
          fontSize: 24,
        },
      },
    },
  ],
  5: [
    baseHeading,
    {
      fontSize: 20,
    },
  ],
});

export const withExtendedTopMargin = styleVariants({
  2: {
    marginTop: 65,
    "@media": {
      [mediaQueries.tabletOrBigger]: {
        marginTop: 75,
      },
    },
  },
  3: {
    marginTop: 60,
    "@media": {
      [mediaQueries.tabletOrBigger]: {
        marginTop: 70,
      },
    },
  },
  4: {
    marginTop: 55,
    "@media": {
      [mediaQueries.tabletOrBigger]: {
        marginTop: 60,
      },
    },
  },
  5: {
    marginTop: 45,
    "@media": {
      [mediaQueries.tabletOrBigger]: {
        marginTop: 50,
      },
    },
  },
});
