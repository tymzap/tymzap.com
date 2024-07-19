import { PropsWithChildren } from "react";

type TextProps = PropsWithChildren;

export function Text({ children }: TextProps) {
  return <span>{children}</span>;
}
