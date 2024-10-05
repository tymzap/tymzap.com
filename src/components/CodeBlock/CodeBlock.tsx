import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import gruvboxLight from "react-syntax-highlighter/dist/esm/styles/prism/gruvbox-light";

import "./registerLanguages";
import * as styles from "./CodeBlock.css";

type CodeBlockProps = {
  language?: string;
  children: string;
};

export function CodeBlock({ children, language }: CodeBlockProps) {
  return (
    <div className={styles.wrapper}>
      <SyntaxHighlighter
        language={language}
        style={gruvboxLight}
        customStyle={{ borderRadius: 8, fontSize: 16 }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
