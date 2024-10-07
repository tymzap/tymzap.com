import { MDXComponents } from "mdx/types.js";
import { PropsWithChildren } from "react";

import { CodeBlock } from "~/components/CodeBlock";
import { Code } from "~/components/Code";
import { List } from "~/components/List";
import { TextLink } from "~/components/TextLink";
import { Blockquote } from "~/components/Blockquote";

export const MDX_COMPONENTS: MDXComponents = {
  a: ({ children, href }) => (
    <TextLink href={href ?? ""} hasUnderline={true}>
      {children}
    </TextLink>
  ),
  pre: (props) => {
    const content = getCodeBlockContentFromProps(props);
    const language = getCodeBlockLanguageFromProps(props);

    return <CodeBlock language={language}>{content}</CodeBlock>;
  },
  code: Code,
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  ul: ({ children }) => <List isOrdered={false}>{children}</List>,
  ol: ({ children }) => <List isOrdered={true}>{children}</List>,
  li: ({ children }) => <List.Item>{children}</List.Item>,
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
