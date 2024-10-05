import { breakpoints } from "./breakpoints";

export const mediaQueries = {
  smallerThanTablet: getMaxWidthMediaQuery(breakpoints.tablet),
  tabletOrBigger: getMinWidthMediaQuery(breakpoints.tablet),
  smallerThanLaptop: getMaxWidthMediaQuery(breakpoints.laptop),
  laptopOrBigger: getMinWidthMediaQuery(breakpoints.laptop),
};

function getMinWidthMediaQuery(value: number) {
  return `screen and (min-width: ${value}px)`;
}

function getMaxWidthMediaQuery(value: number) {
  return `screen and (max-width: ${value - 1}px)`;
}
