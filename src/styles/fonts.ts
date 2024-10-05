import { Source_Sans_3, Fira_Mono, Open_Sans } from "next/font/google";

export const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--source-sans-3",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--open-sans",
});

export const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--fira-mono",
});
