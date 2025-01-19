export function addThemeClassName(
  localStorageKey: string,
  classNames: Record<string, string>,
  defaultTheme: string,
) {
  try {
    const themeFromLocalStorage = JSON.parse(
      localStorage.getItem(localStorageKey) ?? `""`,
    );
    const themeClassName =
      classNames[themeFromLocalStorage] ?? classNames[defaultTheme];

    document.documentElement.classList.add(themeClassName);
  } catch {
    const defaultThemeClassName = classNames[defaultTheme];

    document.documentElement.classList.add(defaultThemeClassName);
  }
}
