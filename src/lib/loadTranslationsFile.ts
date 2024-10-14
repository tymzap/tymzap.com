export async function loadTranslationsFile(locale: string) {
  const { default: translations } = await import(
    `../translations/${locale}.json`
  );

  return translations;
}
