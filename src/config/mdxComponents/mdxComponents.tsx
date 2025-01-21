import { MDXComponents } from "mdx/types.js";

import { CodeBlock } from "~/components/CodeBlock";
import { Code } from "~/components/Code";
import { List } from "~/components/List";
import { TextLink } from "~/components/TextLink";
import { Blockquote } from "~/components/Blockquote";
import { ImageWithCaption } from "~/components/ImageWithCaption";
import { Heading } from "~/components/Heading";
import {
  ViewRepositoryButton,
  ViewRepositoryButtonProps,
} from "~/article/ViewRepositoryButton";
import { ViewCommitLink, ViewCommitLinkProps } from "~/article/ViewCommitLink";

import { MarginWrapper } from "./MarginWrapper";
import { getBlogImageSrc } from "./getBlogImageSrc";
import { getCodeBlockLanguage } from "./getCodeBlockLanguage";
import { getCodeBlockContent } from "./getCodeBlockContent";

export const MDX_COMPONENTS: MDXComponents = {
  ViewRepositoryButton: (props: ViewRepositoryButtonProps) => (
    <MarginWrapper as={"span"}>
      <ViewRepositoryButton {...props} />
    </MarginWrapper>
  ),
  ViewCommitLink: (props: ViewCommitLinkProps) => (
    <MarginWrapper as={"span"}>
      <ViewCommitLink {...props} />
    </MarginWrapper>
  ),
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
    const content = getCodeBlockContent(props);
    const language = getCodeBlockLanguage(props);

    return <CodeBlock language={language ?? undefined}>{content}</CodeBlock>;
  },
  code: ({ children }) => <Code>{children}</Code>,
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
  section: ({ children }) => (
    <MarginWrapper hasTopMargin={false} as={"section"}>
      {children}
    </MarginWrapper>
  ),
};
