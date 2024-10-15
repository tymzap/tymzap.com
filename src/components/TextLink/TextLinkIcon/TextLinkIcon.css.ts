import { style } from "@vanilla-extract/css";

import { link } from "~/components/TextLink/TextLink.css";

export const icon = style({
  margin: "4px 0 0 8px",
  width: 20,
  height: 20,
});

export const withSlideLeftAnimation = style({
  transition: "transform .3s",
  selectors: {
    [`${link}:hover &`]: {
      transform: "translateX(-6px)",
    },
  },
});

export const withSlideRightAnimation = style({
  transition: "transform .3s",
  selectors: {
    [`${link}:hover &`]: {
      transform: "translateX(6px)",
    },
  },
});
