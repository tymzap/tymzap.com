import { MDXComponents } from "mdx/types.js";
import { PropsWithChildren } from "react";

import { CodeBlock } from "~/components/CodeBlock";
import { Code } from "~/components/Code";
import { List } from "~/components/List";
import { TextLink } from "~/components/TextLink";
import { Blockquote } from "~/components/Blockquote";
import { ImageWithCaption } from "~/components/ImageWithCaption";
import { Heading } from "~/components/Heading";
import { ViewSourceButton } from "~/components/ViewSourceButton";

export const MDX_COMPONENTS: MDXComponents = {
  ViewSourceButton,
  img: ({ src, alt, title }) => (
    <ImageWithCaption
      src={getBlogImageSrc(src)}
      alt={alt ?? ""}
      caption={title}
    />
  ),
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
  h2: ({ children, id }) => (
    <Heading level={3} id={id} hasExtendedTopMargin={true}>
      {children}
    </Heading>
  ),
  h3: ({ children, id }) => (
    <Heading level={4} id={id} hasExtendedTopMargin={true}>
      {children}
    </Heading>
  ),
  h4: ({ children, id }) => (
    <Heading level={5} id={id} hasExtendedTopMargin={true}>
      {children}
    </Heading>
  ),
  section: ({ children }) => {
    return <section style={{ marginTop: 70 }}>{children}</section>;
  },
};

function getBlogImageSrc(initialSrc?: string) {
  if (!initialSrc) {
    return "";
  }

  return `/blog/${initialSrc}`;
}

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
