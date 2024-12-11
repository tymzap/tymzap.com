import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";

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
        codeTagProps={{
          style: styles.codeTag,
        }}
        style={a11yDark}
        customStyle={styles.syntaxHighlighter}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
