import { colors } from "~/styles/colors";

export const backgrounds = {
  default: "Cultured",
  values: [
    {
      name: "Cultured",
      value: colors.cultured,
    },
    {
      name: "Eerie black",
      value: colors.eerieBlack,
    },
  ],
} as const;
