import Link from "next/link";
import { PropsWithChildren } from "react";

import * as styles from "./NavbarLink.css";

type NavbarLinkProps = PropsWithChildren<{
  href: string;
}>;

export function NavbarLink({ href, children }: NavbarLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}
