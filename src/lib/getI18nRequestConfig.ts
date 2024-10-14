import { getRequestConfig } from "next-intl/server";

import { loadTranslationsFile } from "~/lib/loadTranslationsFile";

export default getRequestConfig(async () => {
  const LOCALE = "en";

  return {
    locale: LOCALE,
    messages: await loadTranslationsFile(LOCALE),
  };
});
