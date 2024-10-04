import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  cursor: "pointer",
});

export const image = style({
  width: "100%",
  height: 300,
  backgroundPosition: "center",
  borderRadius: 8,
  backgroundSize: "cover",
});

export const details = style({
  display: "flex",
  gap: 10,
});

export const detailsItem = style({
  fontSize: 16,
});

export const title = style({
  fontWeight: 600,
  fontSize: 20,
  selectors: {
    [`${wrapper}:hover &`]: {
      opacity: 0.65,
    },
  },
});
