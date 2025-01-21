import { ReactNode } from "react";

type PropsWithChildrenAndClassName = {
  children?: ReactNode & {
    props: { className?: string; children?: ReactNode };
  };
};

export function getCodeBlockContent(props: PropsWithChildrenAndClassName) {
  const { children } = props;

  if (
    !(children && typeof children === "object" && "props" in children) ||
    !(typeof children.props.children === "string")
  ) {
    return "";
  }

  return children.props.children ?? "";
}
