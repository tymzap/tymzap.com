import Link from "next/link";
import { PropsWithChildren } from "react";

import * as styles from "./ArticleCardLink.css";

type ArticleCardLinkProps = PropsWithChildren<{
  href: string;
}>;

export function ArticleCardLink({ href, children }: ArticleCardLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}
