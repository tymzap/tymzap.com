import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: "Tymek Zapała",
    description: t("tymekZapalaIsASoftwareEngineerAndStartupFounder"),
  };
}
