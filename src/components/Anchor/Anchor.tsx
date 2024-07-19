import { PropsWithChildren } from "react";

import * as styles from "./Anchor.css";

type AnchorProps = PropsWithChildren<{
  href?: string;
  hasAdornment?: boolean;
}>;

export function Anchor({ children, hasAdornment = false, href }: AnchorProps) {
  return (
    <a href={href} className={styles.anchor}>
      {children} <Adornment isVisible={hasAdornment} />
    </a>
  );
}

type AdornmentProps = {
  isVisible: boolean;
};

function Adornment({ isVisible }: AdornmentProps) {
  if (!isVisible) {
    return null;
  }

  return <span className={styles.adornment}>→</span>;
}
