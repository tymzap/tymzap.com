import { PropsWithChildren } from "react";

import { ListItem } from "./ListItem";

type ListProps = PropsWithChildren<{
  isOrdered?: boolean;
}>;

export function List({ isOrdered = false, children }: ListProps) {
  const Component = isOrdered ? "ol" : "ul";

  return <Component>{children}</Component>;
}

List.Item = ListItem;
