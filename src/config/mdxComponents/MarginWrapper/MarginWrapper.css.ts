import { recipe } from "@vanilla-extract/recipes";

export const wrapper = recipe({
  base: {
    display: "block",
    margin: 0,
  },
  variants: {
    withTopMargin: {
      true: {
        marginTop: 60,
      },
    },
    withBottomMargin: {
      true: {
        marginBottom: 60,
      },
    },
  },
});
