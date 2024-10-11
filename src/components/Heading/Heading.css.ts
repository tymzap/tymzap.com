import { styleVariants, style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";
import { mediaQueries } from "~/styles/mediaQueries";

const baseHeading = style({
  fontFamily: vars.fonts.sourceSans3,
  fontWeight: 700,
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
    marginTop: 60,
    "@media": {
      [mediaQueries.tabletOrBigger]: {
        marginTop: 75,
      },
    },
  },
  3: {
    marginTop: 55,
    "@media": {
      [mediaQueries.tabletOrBigger]: {
        marginTop: 70,
      },
    },
  },
  4: {
    marginTop: 50,
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
