import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: {
      template: "%s • Tymek Zapała",
      default: "Tymek Zapała",
    },
    description: t("imASoftwareEngineerAndProductMaker"),
  };
}
