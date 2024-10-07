import { PropsWithChildren } from "react";

import * as styles from "./Blockquote.css";

type BlockquoteProps = PropsWithChildren;

export function Blockquote({ children }: BlockquoteProps) {
  return <blockquote className={styles.wrapper}>{children}</blockquote>;
}

Blockquote.Content = BlockquoteContent;

type BlockquoteContentProps = PropsWithChildren;

function BlockquoteContent({ children }: BlockquoteContentProps) {
  return <div className={styles.content}>{children}</div>;
}
