import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const header = recipe({
  base: {
    display: "flex",
    marginTop: 8,
  },
  variants: {
    withCloseButton: {
      true: {
        marginTop: 0,
        marginBottom: -4,
      },
    },
    withTitle: {
      true: {
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
  },
  compoundVariants: [
    {
      variants: { withCloseButton: true, withTitle: false },
      style: {
        justifyContent: "flex-end",
      },
    },
    {
      variants: { withCloseButton: false, withTitle: true },
      style: {
        marginBottom: 4,
      },
    },
  ],
});

export const title = style({
  margin: "0",
  padding: "0 10px",
  fontSize: 20,
  fontWeight: 600,
  flex: 1,
});
