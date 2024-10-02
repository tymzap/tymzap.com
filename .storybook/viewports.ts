import { Viewport } from "@storybook/addon-viewport";

import { breakpoints } from "~/styles/breakpoints";

export const viewports: Record<string, Viewport> = {
  phone: {
    name: "Phone",
    type: "mobile",
    styles: {
      width: `${breakpoints.phone}px`,
      height: "600px",
    },
  },
  largePhone: {
    name: "Large phone",
    type: "mobile",
    styles: {
      width: `${breakpoints.largePhone}px`,
      height: "700px",
    },
  },
  tablet: {
    name: "Tablet",
    type: "tablet",
    styles: {
      width: `${breakpoints.tablet}px`,
      height: "800px",
    },
  },
  laptop: {
    name: "Laptop",
    type: "desktop",
    styles: {
      width: `${breakpoints.laptop}px`,
      height: "750px",
    },
  },
  largeLaptop: {
    name: "Large laptop",
    type: "desktop",
    styles: {
      width: `${breakpoints.largeLaptop}px`,
      height: "1000px",
    },
  },
  desktop: {
    name: "Desktop",
    type: "desktop",
    styles: {
      width: `${breakpoints.desktop}px`,
      height: "1080px",
    },
  },
  largeDesktop: {
    name: "Desktop",
    type: "desktop",
    styles: {
      width: `${breakpoints.largeDesktop}px`,
      height: "1200px",
    },
  },
};
