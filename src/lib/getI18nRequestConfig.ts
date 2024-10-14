import { getRequestConfig } from "next-intl/server";

import { loadTranslationsFile } from "~/lib/loadTranslationsFile";

export default getRequestConfig(async () => {
  return {
    locale: LOCALE,
    messages: await loadTranslationsFile(LOCALE),
  };
});

const LOCALE = "en";
