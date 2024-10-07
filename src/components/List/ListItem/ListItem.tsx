import { PropsWithChildren } from "react";

type ListItemProps = PropsWithChildren;

export function ListItem({ children }: ListItemProps) {
  return <li>{children}</li>;
}
