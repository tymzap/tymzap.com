import Link from "next/link";
import { PropsWithChildren } from "react";

import * as styles from "./FullscreenMenuLink.css";

type FullscreenMenuLinkProps = PropsWithChildren<{
  href: string;
}>;

export function FullscreenMenuLink({
  href,
  children,
}: FullscreenMenuLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}
