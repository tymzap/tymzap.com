import { SatoriOptions } from "next/dist/compiled/@vercel/og/satori";

export async function loadFonts(): Promise<SatoriOptions["fonts"]> {
  const sourceSans3BoldData = await fetch(
    new URL("../../../../public/source-sans-3-bold.ttf", import.meta.url),
  ).then((response) => response.arrayBuffer());

  const openSansRegularData = await fetch(
    new URL("../../../../public/open-sans-regular.ttf", import.meta.url),
  ).then((response) => response.arrayBuffer());

  const openSansBoldData = await fetch(
    new URL("../../../../public/open-sans-bold.ttf", import.meta.url),
  ).then((response) => response.arrayBuffer());

  return [
    {
      name: "Source Sans 3 Bold",
      data: sourceSans3BoldData,
      weight: 700,
    },
    {
      name: "Open Sans",
      data: openSansRegularData,
      weight: 400,
    },
    {
      name: "Open Sans",
      data: openSansBoldData,
      weight: 700,
    },
  ];
}
