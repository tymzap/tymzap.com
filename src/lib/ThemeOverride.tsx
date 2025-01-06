import { PropsWithChildren } from "react";

type ThemeOverrideProps = PropsWithChildren<{
  theme?: string;
}>;

export function ThemeOverride({ children, theme }: ThemeOverrideProps) {
  return (
    <div className={theme} style={{ display: "contents" }}>
      {children}
    </div>
  );
}
