import { style } from "@vanilla-extract/css";

import { mediaQueries } from "~/styles/mediaQueries";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  "@media": {
    [mediaQueries.tabletOrBigger]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
});
