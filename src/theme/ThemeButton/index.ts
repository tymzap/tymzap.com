import dynamic from "next/dynamic";

export const ThemeButton = dynamic(
  () => import("./ThemeButton").then((module) => module.ThemeButton),
  {
    ssr: false,
  },
);
