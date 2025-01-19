export type AddThemeClassNameParams = {
  localStorageKey: string;
  classNames: Record<string, string>;
  defaultTheme: string;
  themeOverride: string | null;
};

export function addThemeClassName({
  classNames,
  defaultTheme,
  localStorageKey,
  themeOverride,
}: AddThemeClassNameParams) {
  try {
    const theme =
      themeOverride ??
      JSON.parse(localStorage.getItem(localStorageKey) ?? `""`);
    const themeClassName = classNames[theme] ?? classNames[defaultTheme];

    document.documentElement.classList.add(themeClassName);
  } catch {
    const defaultThemeClassName = classNames[defaultTheme];

    document.documentElement.classList.add(defaultThemeClassName);
  }
}
