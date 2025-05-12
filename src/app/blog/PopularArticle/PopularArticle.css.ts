import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/themes/vars.css";
import { mediaQueries } from "~/styles/mediaQueries";
import { bleed } from "~/styles/utils/bleed";

export const wrapper = style({
  backgroundColor: vars.colors.elevatedSurfaceBackground,
  color: vars.colors.text,
  marginTop: 20,
  marginBottom: 80,
  padding: 32,
  ...bleed(32),
  "@media": {
    [mediaQueries.laptopOrBigger]: {
      borderRadius: 8,
      marginTop: 40,
      marginBottom: 100,
    },
  },
});
