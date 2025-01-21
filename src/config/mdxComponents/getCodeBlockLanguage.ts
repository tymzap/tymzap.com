import { ReactNode } from "react";

type PropsWithChildrenAndClassName = {
  children?: ReactNode & {
    props: { className?: string; children?: ReactNode };
  };
};

export function getCodeBlockLanguage(props: PropsWithChildrenAndClassName) {
  const { children } = props;

  if (
    !(children && typeof children === "object" && "props" in children) ||
    !(typeof children.props.className === "string") ||
    !typeof children.props.className.includes(LANGUAGE_PREFIX)
  ) {
    return null;
  }

  return children.props.className.replace(LANGUAGE_PREFIX, "");
}

const LANGUAGE_PREFIX = "language-";
