import { PropsWithChildren } from "react";

type ListProps = PropsWithChildren<{
  isOrdered?: boolean;
}>;

export function List({ isOrdered = false, children }: ListProps) {
  const Component = isOrdered ? "ol" : "ul";

  return <Component>{children}</Component>;
}
