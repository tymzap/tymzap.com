import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const LOCALE = "en";

  return {
    locale: LOCALE,
    messages: (await import(`../translations/${LOCALE}.json`)).default,
  };
});
