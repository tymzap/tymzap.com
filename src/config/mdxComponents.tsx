import { MDXComponents } from "mdx/types.js";
import { PropsWithChildren } from "react";

import { CodeBlock } from "~/components/CodeBlock";
import { Code } from "~/components/Code";

export const MDX_COMPONENTS: MDXComponents = {
  pre: (props) => {
    const content = getCodeBlockContentFromProps(props);
    const language = getCodeBlockLanguageFromProps(props);

    return <CodeBlock language={language}>{content}</CodeBlock>;
  },
  code: Code,
};

function getCodeBlockContentFromProps(props: PropsWithChildren) {
  const { children } = props;

  if (
    !(children && typeof children === "object" && "props" in children) ||
    !(typeof children.props.children === "string")
  ) {
    return null;
  }

  return children.props.children;
}

function getCodeBlockLanguageFromProps(props: PropsWithChildren) {
  const { children } = props;

  const LANGUAGE_PREFIX = "language-";

  if (
    !(children && typeof children === "object" && "props" in children) ||
    !(typeof children.props.className === "string") ||
    !typeof children.props.className.includes(LANGUAGE_PREFIX)
  ) {
    return null;
  }

  return children.props.className.replace(LANGUAGE_PREFIX, "");
}
