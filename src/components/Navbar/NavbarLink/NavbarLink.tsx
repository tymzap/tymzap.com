import Link from "next/link";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

import * as styles from "./NavbarLink.css";

type NavbarLinkProps = PropsWithChildren<{
  href: string;
}>;

export function NavbarLink({ href, children }: NavbarLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      aria-current={isCurrent(href, pathname) ? "page" : undefined}
      className={styles.link}
    >
      {children}
    </Link>
  );
}

function isCurrent(href: string, pathname: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname.startsWith(href);
}
